import {makeStyles} from '@material-ui/core';
import binance from '../assets/images/binance.png';
import bittrex from '../assets/images/bittrex.png';
import cexio from '../assets/images/cexio.png';
import coinbase from '../assets/images/coinbase.png';
import gemini from '../assets/images/gemini.png';
import kraken from '../assets/images/kraken.png';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center',
        margin: '8vh 0'
    },
    headerP: {
        fontSize: '25px'
    },
    mainTable: {
        width: '85%',
        marginBottom: '50px'
    },
    table: {
        width: '100%',
        border: '1px solid white'
    },
    tableHead: {
        border: '1px solid white'
    },
    tableData: {
        border: '1px solid white'
    },
    logo: {
        border: '1px solid white'
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    tableRow: {
        height: '100px',
        textAlign: 'center'
    }
})

export const Partners = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <h1 className={classes.headerH1}>Below you will find and an analysis of the most popular exchanges.</h1>
                <p className={classes.headerP}>Click on the icons to learn more!</p>
            </div>
            <div className={classes.mainTable}>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.legend}>
                            <th className={classes.tableHead}>Exchange</th>
                            <th className={classes.tableHead}>Fees</th>
                            <th className={classes.tableHead}>Best for</th>
                            <th className={classes.tableHead}>Features</th>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://www.coinbase.com/" target="blank"><img className={classes.image} src={coinbase} alt="logo"></img></a></td>
                            <td className={classes.tableData}>0.50% spread for buy/sell transactions; transaction fee from $0.99 to $2.99; up to 0.50% for Coinbase Pro</td>
                            <td className={classes.tableData}>Bitcoin-focused individuals and institutions</td>
                            <td className={classes.tableData}>Coinbase Earn rewards, Coinbase Pro advanced account, user-controlled storage, Stablecoin, staking, and institutional trading tools</td>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://www.binance.com/en" target="blank"><img className={classes.image} src={binance} alt="logo"></img></a></td>
                            <td className={classes.tableData}>0.1% spot trading fee; 0.5% instant buy/sell fee (4.5% fee for deposits with US debit card)</td>
                            <td className={classes.tableData}>Low fees</td>
                            <td className={classes.tableData}>Automated recurring buys, over-the-counter trading, staking rewards, crypto pairs, institutional trading services</td>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://www.kraken.com/en-us/" target="blank"><img className={classes.image} src={kraken} alt="logo"></img></a></td>
                            <td className={classes.tableData}>0% - 0.26%</td>
                            <td className={classes.tableData}>Futures and margin traders</td>
                            <td className={classes.tableData}>Nearly 60 cryptocurrencies, margin and futures trading, OTC trading; account management for high-net-worth individuals and institutional clients; multiple trading platforms, educational resources, and staking rewards</td>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://cex.io/" target="blank"><img className={classes.image} src={cexio} alt="logo"></img></a></td>
                            <td className={classes.tableData}>0.16% - 0.25% maker/taker transaction fees (2.99% deposit)</td>
                            <td className={classes.tableData}>Large cryptocurrency selection</td>
                            <td className={classes.tableData}>More than 80 cryptocurrencies, margin trading, staking rewards, crypto-backed loans, institutional services</td>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://www.gemini.com/" target="blank"><img className={classes.image} src={gemini} alt="logo"></img></a></td>
                            <td className={classes.tableData}>$0.99-$2.99 fee for web and mobile transactions between $10 and $200 (1.49% fee for transactions over $200); 0.50% convenience fee; 3.49% debit card transfers</td>
                            <td className={classes.tableData}>Bitcoin and Ethereum traders</td>
                            <td className={classes.tableData}>Trading options for beginners, experts, and institutions; Gemini Earn, Gemini Wallet, and $200 million insurance in Gemini Custody</td>
                        </tr>
                        <tr className={classes.tableRow}>
                            <td className={classes.logo}><a href="https://bittrex.com/" target="blank"><img className={classes.image} src={bittrex} alt="logo"></img></a></td>
                            <td className={classes.tableData}>0-0.35% maker/taker fees</td>
                            <td className={classes.tableData}>Account security</td>
                            <td className={classes.tableData}>Instant buy/sell, highly secure cold storage, mobile access, 100+ coins</td>
                        </tr>
                    </tbody>                    
                </table>
            </div>            
        </div>
    )
}
