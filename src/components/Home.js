import {makeStyles} from '@material-ui/core';
import showcaseImg from '../assets/images/Stocksy_comp_1811893.jpg';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        marginTop: '4vh',
        fontSize: '25px'
    },
    p:{
        fontSize: '25px'
    },
    showcase: {
        background: `url(${showcaseImg})`,
        width: '100%',
        height: '90vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    aside: {
        width: '30%',
        marginTop: '12%',
        paddingLeft: '0.5rem',
        marginRight: '2rem',
        float: 'right',
        border: '1px solid #1a1a1c',
        borderRadius: '25px'
    },
    asideP: {
        margin: '0.5rem'
    }
})

export const Home = () => {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.header}>
                <h1>Welcome to the Crypto-Tracker Experience</h1>
                <p className={classes.p}>Here you can learn about Cryptocurrencies, track them, and find places to buy them.</p>
            </div>
            <div className={classes.showcase}>
                <aside className={classes.aside}>
                    <p className={classes.asideP}>More than 1 in 10 Americans invested in cryptocurrency over the past year, according to a survey published by the University of Chicago, a sign of the popularity of digital currencies like bitcoin and ethereum. Is it time for you?</p>
                    <br/>
                    <p className={classes.asideP}>We track up to 100 cryptocurrencies in real-time, in an easy to follow, searchable format. We also give you the information on the most popular crypto exchanges, and the benefits of each one.</p>
                    <br/>
                    <p className={classes.asideP}>Here at CTE we strive to give you the tools necessary to build your future through cryptocurrency. We want to create a secure environment so that you have all the information and can make the best decisions. The future of investing is calling, don't send it straight to voicemail.</p>
                </aside>
            </div>
        </div>
    )
}
