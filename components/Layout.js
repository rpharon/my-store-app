import Header from '../components/Header'
import Nav from './Nav'
import Footer from '../components/Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>                    
                    <Header/>
                    { children }  
                </main>                             
                <Footer/>
            </div>        
        </>
    )
}

export default Layout
