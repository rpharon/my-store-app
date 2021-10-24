import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

const addnew = () => {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const owner = e.target.owner.value
        const address = e.target.address.value
        const about = e.target.about.value

        try{
            const addnew = await fetch(`http://localhost:5000/api/stores`, {
                method: 'POST',
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
                    <h2>Add New Store:</h2>
                </Row>

                <Row className='py-2'>
                    <Col><label>Store name:</label></Col>
                    <Col><input 
                            type='text'
                            id='name'
                            name='name'
                            required/>
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
                            required/>            
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
                            required/>
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
                                required/>               
                    </Col>                    
                </Row>

                <Row>
                    <Col xs={6} className="d-grid">
                        <Button 
                            type='submit'
                            variant='success'>Submit</Button>                    
                    </Col>
                    <Col xs={6} className="d-grid">
                        <Link href='/'>
                            <Button 
                                variant='danger'>Cancel</Button>                            
                        </Link>                
                    </Col>
                </Row>
            </form>
        </Container>
    )
}



export default addnew
