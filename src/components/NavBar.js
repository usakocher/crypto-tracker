import {makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        overflow: 'hidden',
        fontSize: '25px',
        marginBottom: '0'
    },
    logo: {
        color: '#e76f3d',
        textDecoration: 'none',
        padding: '8px 15px',
        fontSize: '35px'
    },
    ul: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        padding: '0',
        listStyle: 'none'
    },
    li: {
        display: 'block',
        padding: '8px 15px',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    link: {
        display: 'block',
        padding: '8px 15px',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
})

export const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
            <div><Link className={classes.logo} to='/'>CTE</Link></div>
            <ul className={classes.ul}>
                <li className={classes.li}><Link className={classes.link} to='/'>Home</Link></li>
                <li className={classes.li}><Link className={classes.link} to='/learn'>Learn</Link></li>
                <li className={classes.li}><Link className={classes.link} to='/tracker'>Tracker</Link></li>
                <li className={classes.li}><Link className={classes.link} to='/partners'>Partners</Link></li>
            </ul>
        </div>
    )
}
