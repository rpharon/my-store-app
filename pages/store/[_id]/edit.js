import { Button, Row, Col, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'

const edit = ({ store }) => {
    const router = useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const owner = e.target.owner.value
        const address = e.target.address.value
        const about = e.target.about.value

        try {
            const editStore = await fetch(`http://localhost:5000/api/stores/${store._id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    owner: owner,
                    address: address,
                    about: about
                })
            })

            router.push('/')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row className='py-2'>
                    <h3>Update Store Details:</h3>
                </Row>

                <Row className='py-2'>
                    <Col>
                        <label>Store name:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            id='name'
                            name='name'
                            defaultValue={store.name}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>Owner name:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            name='owner'
                            defaultValue={store.owner}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>Address:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            name='address'
                            defaultValue={store.address}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>About:</label>
                    </Col>
                    <Col>
                        <textarea   
                                type='text'
                                name='about'
                                defaultValue={store.about}/>                   
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Button 
                        variant='success'
                        type='submit'>Submit</Button>
                </Row>
            </form>            
        </Container>
    )
}

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

export default edit
