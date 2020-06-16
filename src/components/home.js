import React from 'react';
import {Button, Navbar, Nav, Card, CardDeck} from 'react-bootstrap'
import Img from '../Assets/Pizza.jpg'
import {Link} from 'react-router-dom'
export default function Home(){
    
    return (
        <div className='homePage'>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href="/">Lambda Eat</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Help</Nav.Link>
                </Nav>  
            </Navbar>
            <Card className="bg-dark text-white">
                <Card.Img src={Img} style={{height:'25rem'}} />
                <Card.ImgOverlay>
                    <Card.Text style={{textAlign:'center', color:'beige', fontSize:'3rem', marginTop: '5rem'}}>
                    Your Favorite Food Delivered While Coding
                    </Card.Text>
                    <Link to='/pizza'><Button size='lg' style={{display:'block', margin: 'auto', marginTop: '5rem' }}>Build Now</Button></Link>
                </Card.ImgOverlay>
            </Card>
            <CardDeck style={{marginTop:'2rem'}}>
                <Card>
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>Peporonni Pizza Special</Card.Title>
                        <Link to='/pizza'><Button style={{display:'block', margin:'auto'}}>Build Now</Button></Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>Build Your Pizza Today</Card.Title>
                        <Link to='/pizza'><Button style={{display:'block', margin:'auto'}}>Build Now</Button></Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}