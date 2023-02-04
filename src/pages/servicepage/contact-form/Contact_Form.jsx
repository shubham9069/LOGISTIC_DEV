import React from 'react'
import './contact_form.css'
import Form from 'react-bootstrap/Form';
import { packermover,warehouse,smiley,people,move } from '../assest/exportfiles';

const Contact_Form = () => {
  return (
    <>
     <div className="row py-5  contact-1200px center-div section-padding section-marginX">
               <div className="col-sm-12 col-lg-8 center-div" Style={'flex:1;flex-direction:column'}>
               <div  className="contact-text" style={{minHeight:'100px'}}>
               <h1>Packer and Mover</h1>
               <p>Find out how much your moving will costt your</p>
               </div>
               <img src={packermover} style={{maxWidth:'450px',width:'100%'}}></img>
           
               </div>
  <div className="col-sm-12 col-lg-4  " Style={'flex:1;width:auto'}>
              <div className="contact-text"  style={{minHeight:'100px'}}>
              <h4>Find out how much your moving will cost your</h4>
              </div>
                   <Form >
      <Form.Group className="from-contact" controlId="formBasicEmail">
        <Form.Label>Full Name </Form.Label>
        <Form.Control type="text"  style={{height:'50px'}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  style={{height:'50px'}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number"  style={{height:'50px'}} />
      </Form.Group>
     
      <buttton className="btn-calculatecost" type="submit">
        Calculate moving Cost
      </buttton>
    </Form>
                   </div>
                      
                   </div>
       <div className="icon-info section-padding" style={{margin:'2rem 0'}}>
    <div>
      <img src={move} />
      <p>1,00,000 +</p>
      <p>House Movers</p>
    </div>
    <div>
      <img src={smiley} />
      <p>1,00,000 +</p>
      <p>Happy Customers</p>
    </div>
    <div>
      <img src={people} />
      <p>1000 +</p>
      <p>Corporate Client </p>
    </div>
    <div>
      <img src={warehouse} />
      <p>160</p>
      <p>Warehouse</p>
    </div>
       </div>            
              
    </>
  )
}

export default Contact_Form