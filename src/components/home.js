import React from 'react';
import {Navbar, Nav, Card, Button} from 'react-bootstrap'
import img from '../Assets/Pizza.jpg'

function Home(){
    return (
        <div className='home'>

            <div className='header'>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Lambda Eats Pizza</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pizza">Build Pizza</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
            <div className='body'>
                <Card className="bg-dark text-white">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title style={{textAlign:'center', paddingTop:'10%'}}>Lambda Eats</Card.Title>
                        <Button href='/pizza' style={{width:'20%', marginLeft:'40%'}}>Build Your Pizza Now</Button>
                    </Card.ImgOverlay>
                </Card>
            </div>









        </div>
        
        
    )
}

export default Home