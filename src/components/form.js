import React, {useState} from 'react';
import {Navbar, Nav, Card, Dropdown, DropdownButton, Form} from 'react-bootstrap'
import Img from '../Assets/Pizza.jpg'
import * as yup from 'yup'
import Axios from 'axios';

export default function Forms(){


    const [formData, setFormData] = useState({
        size:'',
        original:false,
        garlic:false,
        bbq:false,
        spinach:false,
        pepperoni:false,
        dicedT:false,
        sausage:false,
        blackO:false,
        gluten:false,
        instructions:'',
        quantity:''
    })

    const schema = yup.object().shape({
        size: yup.string().required().min(2)
    })

    let amount =0;
        if(formData.size === 'small'){
            amount = amount + 5
        }else if(formData.size === 'medium'){
            amount = amount +10
        }
        else if(formData.size === 'large'){
            amount = amount +15
        }
        let arr1 = [formData.dicedT, formData.blackO];
        arr1.map(item => {
            if(item === true){
                amount = amount +1
            }
        })
        let arr3 = [formData.bbq, formData.spinach, formData.pepperoni, formData.sausage];
        arr3.map(item => {
            if(item === true){
                amount =amount +3
            }
        })
        if(formData.garlic === true){
            amount = amount + 5
        }
        if (formData.gluten === true){
                    amount = amount +1
                }
        if (formData.quantity === '1'){
                    amount = amount *1
                }else if (formData.quantity === '2'){
                    amount = amount *2
                }else if (formData.quantity === '3'){
                    amount = amount *3
                }else if (formData.quantity === '4'){
                    amount = amount *4
                }else if (formData.quantity === '5'){
                    amount = amount *5
                }

    const changeHandelerString = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const changeHandelerBool = (e) => {
        setFormData({...formData, [e.target.name]:e.target.checked})
    }

    const sumbitting = event => {
        event.preventDefault();
        schema.validate(formData)
            .then(()=> {
                Axios.post('https://reqres.in/api/users', formData).then((res) => {
                    console.log('this is your data', res.data)
                })
            })
        console.log(formData);
        setFormData({...formData,
            size:'',
            original:false,
            garlic:false,
            bbq:false,
            spinach:false,
            pepperoni:false,
            dicedT:false,
            sausage:false,
            blackO:false,
            gluten:false,
            instructions:'',
            quantity:''
        })
        
        
    }
    
    
    const marginLeft7 = {marginLeft: '7%'}

    return (
        <form onSubmit={sumbitting}>
            <div className='pizzaForm' style={{width:'100%'}}>

                <div className='header'>
                    <Navbar bg='primary' variant='dark'>
                        <Navbar.Brand href="/">Lambda Eat</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Help</Nav.Link>
                        </Nav>  
                    </Navbar>
                </div>


                <div className='topImage'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={Img} style={{height:'25rem'}} />
                        <Card.ImgOverlay>
                            <Card.Text style={{textAlign:'center', color:'beige', fontSize:'3rem', marginTop: '5rem'}}>
                            Your Favorite Food Delivered While Coding
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>


                <h3 style={{marginTop:'2rem', marginLeft:'7%'}}>Build Your Own Pizza</h3>


                <div className='size'>
                    <div style={{backgroundColor:'lightgrey', padding:'1rem'}}>
                        <h4 style={marginLeft7}>Choice of Size</h4>
                        <h6 style={marginLeft7}>Required</h6>
                    </div>
                    <Form.Group style={{width:'15%', marginTop:'2rem', marginLeft:'12.5%'}}>
                        <Form.Control onChange={changeHandelerString} value={formData.size} name='size' as="select">
                            <option name='select' value=''>Select</option>
                            <option name='small' value='small'>Small</option>
                            <option name='medium' value='medium'>Medium</option>
                            <option name='large' value='large'>Large</option>
                        </Form.Control>
                    </Form.Group>
                </div>


                <div className='sauce'>
                    <div style={{backgroundColor:'lightgrey', padding:'1rem'}}>
                        <h4 style={marginLeft7}>Choice of Sauce</h4>
                        <h6 style={marginLeft7}>Required</h6>
                    </div>
                    <Form style={{margin:'2rem'}} >
                        <Form.Check 
                            onChange={changeHandelerBool}
                            style={{margin:'2rem', marginLeft:'12.5%'}}
                            label="Original Red"
                            name='original' 
                            checked={formData.original}/>
                    </Form>
                    <Form style={{margin:'2rem'}} >
                        <Form.Check name='garlic' onChange={changeHandelerBool}
                            style={{margin:'2rem', marginLeft:'12.5%'}}
                            label="Garlic Ranch"
                            name='garlic'
                            checked={formData.garlic} />
                    </Form>
                    <Form style={{margin:'2rem'}} >
                        <Form.Check name='bbq' onChange={changeHandelerBool}
                            style={{margin:'2rem', marginLeft:'12.5%'}}
                            label="BBQ Sauce"
                            name='bbq' 
                            checked={formData.bbq}/>
                    </Form>
                    <Form style={{margin:'2rem'}} >
                        <Form.Check name='spinach' onChange={changeHandelerBool}
                            style={{margin:'2rem', marginLeft:'12.5%'}}
                            label="Spinach Alfredo"
                            name='spinach' 
                            checked={formData.spinach}/>
                    </Form>
                </div>


                <div class='toppings'>
                    <div style={{backgroundColor:'lightgrey', padding:'1rem'}}>
                        <h4 style={marginLeft7}>Add Toppings</h4>
                    </div>
                    <Form style={{margin:'2rem'}}>
                            <Form.Check style={{margin:'2rem', marginLeft:'12.5%'}} onChange={changeHandelerBool} checked={formData.pepperoni} label="Pepperoni" name='pepperoni' />
                            <Form.Check style={{margin:'2rem', marginLeft:'12.5%'}} onChange={changeHandelerBool} checked={formData.dicedT} label="Diced Tomatos" name='dicedT' />
                            <Form.Check style={{margin:'2rem', marginLeft:'12.5%'}} onChange={changeHandelerBool} checked={formData.sausage} label="Sausage" name='sausage' />
                            <Form.Check style={{margin:'2rem', marginLeft:'12.5%'}} onChange={changeHandelerBool} checked={formData.blackO} label="Black Olives" name='blackO' />
                    </Form>
                </div>


                <div className='substitute'>
                    <div style={{backgroundColor:'lightgrey', padding:'1rem'}}>
                        <h4 style={marginLeft7}>Choice of Substitute</h4>
                    </div>
                    <div style={{margin:'2rem', marginLeft:'12.5%'}} className='custom-control custom-switch'>
                        <input
                            onChange={changeHandelerBool}
                            type='checkbox'
                            className='custom-control-input'
                            id='glutenFree'
                            name='gluten'
                            checked={formData.gluten}
                            />
                            <label className='custom-control-label' htmlFor='glutenFree'>
                                Gluten Free Crust (+ $1.00)
                            </label>
                    </div>
                </div>


                <div className='special'>
                    <div style={{borderBottom:'solid black 2px'}}>
                        <div style={{backgroundColor:'lightgrey', padding:'1rem'}}>
                            <h4 style={marginLeft7}>Special Instructions</h4>
                        </div>
                        <textarea
                        onChange={changeHandelerString}
                        style={{ width:'80%', margin:'2% 10%'}}
                        placeholder="Anything else you'd like?"
                        value={formData.instructions}
                        name='instructions'/>
                    </div>
                </div>    

                <div className='footer'>
                    <Form style={{width:'95%', display:'flex', margin:'2%' }}>
                        <Form.Group style={{width:'10%', textAlign:'center', margin:'auto', marginBottom:'1%' }} controlId="exampleForm.SelectCustom">
                            <Form.Label style={{width:'25%'}}>Quantity</Form.Label>
                            <Form.Control onChange={changeHandelerString} name='quantity' value={formData.quantity} as="select" custom>
                                <option name='1' value='1'>1</option>
                                <option name='2' value='2'>2</option>
                                <option name='3' value='3'>3</option>
                                <option name='4' value='4'>4</option>
                                <option name='5' value='5'>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
    <button style={{width:'50%', height:'50%', marginLeft:'25%', marginBottom:'2%'}} type="submit" class="btn btn-outline-primary">Order: Total Amount {amount}</button>
            </div>
        </form>
    )
}