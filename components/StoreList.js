import { useRouter } from 'next/router'
import Store from './Store'
import { Button, Row } from 'react-bootstrap'
import storeStyles from '../styles/Store.module.css'

const StoreList = ({ stores }) => {
    const router = useRouter()

    const addNewStore = () => {
        router.push("/addnew")
    }

    return (
        <>        
            <div className={storeStyles.grid}>  
                <Row>                
                    <Button variant="primary" onClick={addNewStore}>Add New Store</Button>
                </Row>                  
                {
                    stores.length > 0
                    ? <>
                        { stores.map((store) => (
                            <Store key={store._id} store={store}/>
                        ))}
                    </>
                    : <h1>No stores are available.</h1>
                }
            </div>
        </>
    )
}

export default StoreList
