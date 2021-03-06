import {makeStyles} from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Coin } from './Coin';

const useStyles = makeStyles({
    tracker: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '65px',
        color: '#fff'
    },        
    searchBar: {
        marginBottom: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },    
    searchText: {
        marginBottom: '32px',
        textAlign: 'center'
    },    
    searchInput: {
        paddingLeft: '16px',
        width: '300px',
        height: '50px',
        borderRadius: '4px',
        border: 'none',
        backgroundImage: 'linear-gradient(-225deg, #f3e9e7 0%, #9bcfe0 48%, #00a7c7 100%)',
        color: '#e76f3d',
        fontSize: '25px'
    },
    
    legend: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        borderBottom: '1px solid #d7d7d7',
        width: '1000px',
    },    
    coinName: {
        fontSize: '16px',
        marginLeft: '10px',
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '75px'
    },    
    symbol: {
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '75px'
    },    
    price: {
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '25px'
    },
    location: {
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: '75px'
    },
    volume: {
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '140px'
    },    
    mktCap: {
        width: '80px',
        display: 'flex',
        justifyContent: 'center'
    },    
    percent: {
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '28px',
        textAlign: 'center'
    }     
})

export const Tracker = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
    )

    return (
        <div className={classes.tracker}>
            <div className={classes.searchBar}>
            <h1 className={classes.searchText}>Search a coin</h1>
            <form>
                <input 
                type='text' 
                placeholder='Search' 
                className={classes.searchInput} 
                onChange={handleChange}
                />
            </form>
            </div>
            <div>
            <div className={classes.legend}>
                <p className={classes.coinName}>Name</p>
                <p className={classes.symbol}>Symbol</p>
                <p className={classes.price}>Price</p>
                <p className={classes.percent}>24h change</p>
                <p className={classes.location}>24h Location</p>
                <p className={classes.volume}>Volume</p>
                <p className={classes.mktCap}>Market Cap</p>
            </div>
            </div>
            {filteredCoins.map(coin => {
            return (
                <Coin 
                key={coin.id} 
                name={coin.name} 
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                high={coin.high_24h}
                low={coin.low_24h}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
                />
            )
            })}
        </div>
    );
}
