import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    section: {
        position: 'relative',
        color: 'white',
        marginTop: '5%',
        width: '60%',
        left: '20%',
        lineHeight: '1.5',
        marginBottom: '50px'
    },
    section_h1: {
        textDecoration: 'underline',
        marginTop: '25px'
    },
    section_p: {
        fontSize: '20px'
    }
})

export const Learn = () => {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.section}>
                <h1 className={classes.section_h1}>What is Cryptocurrency?</h1>
                <p className={classes.section_p}>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.</p>
                <h1 className={classes.section_h1}>What are the Advantages of Cryptocurrency?</h1>
                <p className={classes.section_p}>Cryptocurrencies hold the promise of making it easier to transfer funds directly between two parties, without the need for a trusted third party like a bank or credit card company. These transfers are instead secured by the use of public keys and private keys and different forms of incentive systems, like Proof of Work or Proof of Stake.</p>
                <br/>
                <p className={classes.section_p}>In modern cryptocurrency systems, a user's "wallet," or account address, has a public key, while the private key is known only to the owner and is used to sign transactions. Fund transfers are completed with minimal processing fees, allowing users to avoid the steep fees charged by banks and financial institutions for wire transfers.</p>
                <h1 className={classes.section_h1}>What is Cryptocurrency's Future?</h1>
                <p className={classes.section_p}>"Way before 2071, the dollar will have more in common with a crypto than with silver or gold, so there is no need to doubt the longevity of encrypted algorithms as stores of value and media of exchange. All money is a form of encryption. It’s been that way from the start, and as our lives converge ever more closely with the digital universe, the drive to invest in tokens will only accelerate." - Frederick Kaufman, Economic Historian</p>
                <h1 className={classes.section_h1}>What to look forward to...</h1>
                <p className={classes.section_p}>Here at CTE we strive to put you in the best positions possible for a better future. We have many plans for this, including symposiums on Cryptocurrency to help you understand it better, the ability to create a watch list and custom alerts, and we are negotiating with our partners to establish direct connections for your investments. The future is yours and we want to help you control it.</p>
            </div>
        </div>
    )
}
