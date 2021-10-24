import Link from 'next/link'
import storeStyles from '../styles/Store.module.css'

const Store = ({ store }) => {
    return (
        <Link href="/store/[_id]" as={`/store/${store._id}`}>
            <a className={storeStyles.card}>
                <h3>{store.name} &rarr;</h3>
                <p>{store.address}</p>
            </a>
        </Link>
    )
}

export default Store
