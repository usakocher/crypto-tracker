import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'start',
        alignItems: 'center',
        height: '80px',
        borderBottom: '1px solid #d7d7d7',
        width: '1000px'
    },
    coin : {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '24px',
        minWidth: '300px'
    },
    coinName : {
        fontSize: '16px',
        width: '150px'
    },
    image : {
        height: '30px',
        width: '30px',
        marginRight: '10px'
    },
    symbol : {
        textTransform: 'uppercasee'
    },
    data: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    price: {
        width: '110px'
    },
    volume: {
        width: '200px'
    },
    mktCap: {
        width: '240px'
    },
    percentRed: {
        width: '80px',
        color: '#f00606'
    },
    percentGreen: {
        width: '80px',
        color: '#11d811'
    },
    percentWhite: {
        width: '80px',
        color: 'white'
    },
})

export const Coin = ({ name, price, high, low, symbol, marketcap, volume, image, priceChange }) => {
    const classes = useStyles();
    const range = high - low;
    const currentLocation = price/range;

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.coin}>
                    <img className={classes.image} src={image} alt='crypto' />
                    <h1 className={classes.coinName}>{name}</h1>
                    <p className={classes.symbol}>{symbol}</p>
                </div>
                <div className={classes.data}>
                    <p className={classes.price}>${price.toLocaleString()}</p>
                    
                    {priceChange < 0 ? (
                        <p className={classes.percentRed}>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className={classes.percentGreen}>{priceChange.toFixed(2)}%</p>
                    )}
                    
                    {(() => {
                        switch (true) {
                            case (currentLocation > 85):
                                return <p className={classes.percentGreen}>{currentLocation.toFixed(2)}%</p>;
                            case (currentLocation < 15):
                                return <p className={classes.percentRed}>{currentLocation.toFixed(2)}%</p>;
                            default:
                                return <p className={classes.percentWhite}>{currentLocation.toFixed(2)}%</p>;
                        }
                    })()}
                    
                    <p className={classes.volume}>${volume.toLocaleString()}</p>


                    <p className={classes.mktCap}>
                        ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};