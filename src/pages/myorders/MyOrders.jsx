import React, { useContext, useState,useEffect } from 'react'
import './myorders.css'
import Modal from 'react-bootstrap/Modal';
import axios from '../../axios';
import Toast from '../../Toast';
import AuthProvider, { AuthContext } from '../../AuthProvider';
import { waitForElementToBeRemoved } from '@testing-library/react';

const MyOrders = () => {
  const {userToken}= useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(true)
    const [show,setshow] = useState(false)
    const [Modaldata,setModaldata] = useState({})
    const [Allorders,setAllorders] = useState()

    const all_enquiry =async () =>
    {
        try{
            setIsLoading(true)
            const response= await axios({
              method: "get",
             url:'/enqueries',
              headers:{
               'Authorization': `Bearer ${userToken}`
              }
              } )
             
             if(response.status===200){
              const data = response.data;
              setAllorders(data?.enqueries)
              Toast(data.message,response.status)
              
              
             }
           }
           catch(err){
            const error = err.response.data
            Toast(error.message);
            
         
         
           }
           finally{
            setIsLoading(false)
           }
         
    
    }
    
    
    useEffect(()=>{
        all_enquiry();
    },[])



    
  return (
    <>
    {Allorders?.map((element, i)=>{
      
      return     <div className=" myorder container ">
     <div className="myorder-box1">
    <p>{ new Date(element.created_at).toLocaleString()}</p>
    <p>{element.id} enquiry_id</p>
     </div>
     <div className="myorder-box2 d-flex" style={{flexDirection:'column',gridGap:'20px'}}>
    <div className="myorder-box-top">
    <div style={{flex:0.75}}>
    <h6>From</h6>
        <p>{element.from_location}</p>
    </div>
    <div style={{flex:1}}>
    <h6>To</h6>
    <p>{element.to_location}</p>
    </div>

    </div>
    <div className="myorder-box-middle">
    <div style={{flex:0.75}}>
    <h6>Move planner</h6>
        <p>{element?.move_planner ==null?"waiting for allocation " :element?.planner_name }<br/><span>+91 1245785214</span></p>
    </div>
    <div style={{flex:1}}>
    <h6>Move Manager</h6>
    <p>{element?.move_manager ==null?"waiting for allocation " :element?.move_manager }</p>
    </div>

    </div>
    <div className="myorder-box-lower">
    <div >
        <p> Your order is being evaluated by us</p>
    </div>
    <div >
    <button type="button" className='viewdetails' onClick={()=>{setModaldata(element);setshow(true)}}>view details </button>
    <button type="button" className='edit-inv-btn' >Edit inventry</button>
    </div>

    </div>


     </div>
     </div>
    })}


    {Modaldata ? 

      <Modal show={show} onHide={()=>setshow(false)} >
<Modal.Header closeButton >
  <Modal.Title>details </Modal.Title>
</Modal.Header>
<Modal.Body>
<div className=" d-flex" style={{flexDirection:'column',gridGap:'10px'}}>
<div className="myorder-modal-top">
<div style={{flex:0.75}}>
<h6>Enquiry Id</h6>
<p>{Modaldata?.id}</p>
</div>
<div style={{flex:1}}>
<h6>What To Move ?</h6>
<p>from:{Modaldata?.from_bhk}  to:{Modaldata?.to_bhk}</p>
</div>
</div>

<div className="myorder-modal-middle">
<div style={{flex:0.75}}>
<h6>From</h6>
<p>{Modaldata?.from_location}</p>
</div>
<div style={{flex:1}}>
<h6>To</h6>
<p>{Modaldata.to_location}</p>
</div>
</div>

<div className="myorder-modal-middle">
<div style={{flex:0.75}}>
<h6>Floor</h6>
<p>{Modaldata?.from_floor} lift {Modaldata?.from_lift==1?<span style={{color:'green'}}>available</span>:<span style={{color:'red'}}>Not available</span>} </p>
</div>
<div style={{flex:1}}>
<h6>Floor</h6>
<p>{Modaldata?.to_floor} lift {Modaldata?.to_lift==1?<span style={{color:'green'}}>available</span>:<span style={{color:'red'}}>Not available</span>} </p>
</div>
</div>
<div className="myorder-modal-middle">
<div style={{overflow:'hidden'}}>
<h6>items</h6>
     {Object.keys(Modaldata?.products || {}).map((element)=>{

      return <div>
        <h6>{element}</h6>
        {Modaldata.products[element].map((att)=>{


          return <p>{att.attribute_name}:  {att.attribute_value}</p>
        })}
      </div>



     })}
</div>
</div>

</div>
</Modal.Body>
<Modal.Footer>
  <button className="viewdetails" onClick={()=>setshow(true)}>
    Close
  </button>
  <button className="edit-inv-btn" onClick={()=>{window.print();}}>
    print 
  </button>
</Modal.Footer>
</Modal>
    
    :""}
    
     
    
    </>
  )
}

export default MyOrders