import React, {useState} from 'react';
import {Navbar, Card, Nav, Button, Form, Col, Row} from 'react-bootstrap'
import img from '../Assets/Pizza.jpg'
import * as yup from 'yup';
import axios from 'axios'

function Forms (){

    const [formData, setFormData] = useState({
        size:'',
        original:false,
        garlic:false,
        bbq:false,
        spinach:false,
        pepperoni:false,
        sausage:false,
        dicedT:false,
        blackO:false,
        gluten:false,
        instructions:'',
        quantity:''
    })

    const schema = yup.object().shape({
        size: yup.string().required().min(3)
    })
    
    let onChangeString = (event) => {
        setFormData({
            ...formData, [event.target.name]:event.target.value
        })
    }
    
    let onChangeBool = (event) => {
        setFormData({
            ...formData, [event.target.name]:event.target.checked
        })
    }
    
    let submitting = (event) => {
        event.preventDefault();
        schema.validate(formData)
            .then(() => {
                axios.post('https://reqres.in/api/users', formData).then((res) => {
                    console.log('this is the data', res.data)
                })
            })
        console.log(formData);
        setFormData({
            size:'',
            original:false,
            garlic:false,
            bbq:false,
            spinach:false,
            pepperoni:false,
            sausage:false,
            dicedT:false,
            blackO:false,
            gluten:false,
            instructions:'',
            quantity:''
        })
    }

    return (
        <form onSubmit={submitting}> 
            <div className='header'>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Lambda Eats Pizza</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pizza">Build Pizza</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
            <div className='imageBody'>
                <Card className="bg-dark text-white">
                    <Card.Img src={img} alt="Card image" />
                </Card>
            </div>
                <div className='menu'>
                    <div style={{padding:'2rem 0 0 6%'}}>
                        <h2>Build Your Own Pizza</h2>
                    </div>
                    <div style={{padding:'2rem 0 1rem 6%', backgroundColor:'lightgrey'}}>
                        <h4>Choice of Size</h4>
                        <h5>Required</h5>
                    </div>

                    <div>
                    <Form.Group controlId="exampleForm.ControlSelect1" style={{width:'20%', padding:'1rem 0 1rem 6%'}}>
                        <Form.Label>Size</Form.Label>
                        <Form.Control onChange={onChangeString} name='size' as="select">
                            <option name='' value='' >Select</option>
                            <option name='small' value='small' >Small</option>
                            <option name='medium' value='medium' >Medium</option>
                            <option name='large' value='large' >Large</option>
                        </Form.Control>
                    </Form.Group>
                    </div>

                    <div style={{padding:'2rem 0 1rem 6%', backgroundColor:'lightgrey'}}>
                        <h4>Choice of Sauce</h4>
                        <h5>Required</h5>
                    </div>
                    <div>
                        <fieldset>
                            <Form.Group as={Row} style={{width:'20%', padding:'1rem 0 1rem 6%'}}>
                            <Col sm={10}>
                                <Form.Check
                                onChange={onChangeBool}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Original Red"
                                name="original"
                                checked={formData.original}
                                id="original"
                                />
                                <Form.Check
                                onChange={onChangeBool}
                                checked={formData.garlic}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Garlic Ranch"
                                name="garlic"
                                id="garlic"
                                />
                                <Form.Check
                                onChange={onChangeBool}
                                checked={formData.bbq}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="BBQ Sauce"
                                name="bbq"
                                id="bbq"
                                />
                                <Form.Check
                                onChange={onChangeBool}
                                checked={formData.spinach}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Spinach Alfredo"
                                name="spinach"             
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </div>

                    <div style={{padding:'2rem 0 1rem 6%', backgroundColor:'lightgrey'}}>
                        <h4>Choice of Toppings</h4>
                        <h5>Required</h5>
                    </div>

                    <div>
                        <fieldset>
                            <Form.Group as={Row} style={{width:'20%', padding:'1rem 0 1rem 6%'}}>
                            <Col sm={10}>
                                <Form.Check
                                data-cy='checkbox1'
                                onChange={onChangeBool}
                                checked={formData.pepperoni}                            
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Pepperoni"
                                name="pepperoni"
                                id="original"
                                />
                                <Form.Check
                                data-cy='checkbox2'
                                onChange={onChangeBool}
                                checked={formData.sausage}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Sausage"
                                name="sausage"
                                id="garlic"
                                />
                                <Form.Check
                                data-cy='checkbox3'
                                onChange={onChangeBool}
                                checked={formData.dicedT}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Diced Tomatos"
                                name="dicedT"
                                id="bbq"
                                />
                                <Form.Check
                                data-cy='checkbox4'
                                onChange={onChangeBool}
                                checked={formData.blackO}
                                style={{padding:'1rem'}}
                                type="radio"
                                label="Black Olives"
                                name="blackO"             
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </div>

                    <div style={{padding:'2rem 0 1rem 6%', backgroundColor:'lightgrey'}}>
                        <h4>Choice of Gluten</h4>
                        <h5>Required</h5>
                    </div>
                    <Form>
                        <Form.Check 
                            onChange={onChangeBool}
                            checked={formData.gluten}
                            style={{padding:'2rem', marginLeft:'8rem'}}
                            type="switch"
                            id="custom-switch"
                            name='gluten'
                            label="Gluten Free (+ $1.00)"
                        />
                    </Form>

                    <div style={{padding:'2rem 0 1rem 6%', backgroundColor:'lightgrey'}}>
                        <h4>Special Instructions</h4>
                    </div>
                    <div style={{borderBottom:'solid black 3px'}}>
                        <textarea data-cy='instructions' onChange={onChangeString} name='instructions' value={formData.instructions} style={{width:'80%', marginLeft: '10%', marginTop:'2rem', marginBottom:'2rem'}}/>
                    </div>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg" style={{width:'20%', marginLeft:'40%', marginTop:'2rem'}}>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control onChange={onChangeString} name='quantity' value={formData.quantity} as="select" size="lg" custom>
                            <option name='1' value='1' >1</option>
                            <option name='2' value='2' >2</option>
                            <option name='3' value='3' >3</option>
                            <option name='4' value='4' >4</option>
                            <option name='5' value='5' >5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button data-cy='submit' variant="outline-primary" style={{width:'20%', marginLeft:'40%', marginTop:'.5rem', marginBottom:'3rem'}} type='submit' >Order</Button>
                </div>
            </form>    
    )
}
export default Forms