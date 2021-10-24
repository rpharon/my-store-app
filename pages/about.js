import Link from 'next/link'
import aboutStyles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={aboutStyles.grid}>
            <h4>MyStore is a food hub community where you can sell your products.</h4>
            <Link href='/addnew'>                
                <a className={aboutStyles.underline}><span>Come join us!</span></a>
            </Link>
        </div>
    )
}

export default about
