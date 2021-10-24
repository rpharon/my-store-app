import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>My</span>Store
            </h1>
            <p className={headerStyles.description}>
                Your daily online store
            </p>
        </div>
    )
}

export default Header
