import Link from 'next/link'
import { Button, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'

const store = ({ store }) => {
    const router = useRouter()
    
    const goBack = () => {
        router.push("/")
    }

    const deleteStore = async () => {
        const storeId = store._id

        try {
            const deleteStore = await fetch(`http://localhost:5000/api/stores/${storeId}`, { 
                method: 'DELETE'
            })            

            router.push("/")
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>{store.name}</h1>
            by
            <h2>{store.owner}</h2>
            <p>Location: {store.address}</p>
            <p>About: {store.about}</p>
            <p>Date Added: {store.dateAdded}</p>
            <br/>

            <Row>
                <Col>
                    <Button variant='warning' onClick={goBack}>Back</Button>
                </Col>
                <Col>
                    <Button variant='danger' onClick={deleteStore}>Delete</Button>
                </Col>
                <Col>
                    <Link href='/store/[_id]/edit' as={`/store/${store._id}/edit`}>            
                        <Button variant='success'>Edit</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

//getting from server, each load
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`http://localhost:5000/api/stores/${context.params._id}`)

//     const store = await res.json()

//     return {
//         props: {
//             store
//         }
//     }
// }
//getting from server, each load

//for rendering static site
export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:5000/api/stores/${context.params._id}`)

    const store = await res.json()

    return {
        props: {
            store
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/api/stores`)

    const stores = await res.json()

    const ids = stores.map(store => store._id)
    const paths = ids.map(_id => ({params: {_id: _id.toString()}}))

    return {
        paths,
        fallback: false
    }
}
//for rendering static site

export default store
