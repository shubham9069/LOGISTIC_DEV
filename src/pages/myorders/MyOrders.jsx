import React, { useContext, useState,useEffect } from 'react'
import './myorders.css'
import Modal from 'react-bootstrap/Modal';
import axios from '../../axios';
import Toast from '../../Toast';
import AuthProvider, { AuthContext } from '../../AuthProvider';
import { waitForElementToBeRemoved } from '@testing-library/react';
import {sofa} from '../../estimatepages/assest/Exportimage'
import { Fade } from 'react-reveal'

const MyOrders = () => {
  const {userToken}= useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(true)
    const [show,setshow] = useState(false)
    const [Modaldata,setModaldata] = useState({})
    const [Allorders,setAllorders] = useState([])

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
              setAllorders(data?.enqueries?.reverse())
              // Toast(data.message,response.status)
              
              
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
    {!Allorders?.length && ("no order found ")}
    {Allorders?.map((element, i)=>{
      
      return  element?.link!='#' && (<div className=" myorder container ">
     <div className="myorder-box1">
    <p>{ new Date(element.created_at).toLocaleString()}</p>
    <p>Enquiry Id:{element.id} </p>
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
        {element?.status==0&&(<p style={{color:'red'}}> Cancelled</p>)}
        {element?.status==1&&(<p style={{color:'red'}}>Pending <img src='images/pending.gif' style={{width:'20px'}}></img></p>)}
        {element?.status==2&&(<p style={{color:'grey'}}> <img src='images/pending.gif' style={{width:'20px'}}></img>Completed</p>)}
        {element?.status==3&&(<p style={{color:'green'}}>Approved</p>)}
    </div>
    <div >
    <button type="button" className='viewdetails' onClick={()=>{setModaldata(element);setshow(true)}}>view details </button>
    {/* <button type="button" className='edit-inv-btn' >Edit inventry</button> */}
    </div>

    </div>


     </div>
     </div>
    )
    })}


    {Modaldata ? 

      <Modal show={show} onHide={()=>setshow(false)} scrollable={true} size='lg'>
<Modal.Header closeButton >
  <Modal.Title>details </Modal.Title>
</Modal.Header>
<Modal.Body scrollable={true} >
<div className=" d-flex" style={{flexDirection:'column',gridGap:'10px'}}>
<div className="myorder-modal-top">
<div style={{flex:0.75}}>
<h6>Enquiry Id</h6>
<p>{Modaldata?.id}</p>
</div>
<div style={{flex:1}}>
<h6>What To Move ?</h6>
<p>{Modaldata?.from_bhk} BHK</p>
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
<Fade bottom>
    <div className='itemlist-container'>
    
    {Object.keys(Modaldata?.products || {})?.map((element)=>{
        
        if(Modaldata?.products[element]?.length)
        {
        return  <div className='item-list-box '>
       <div>
        <img src={sofa}></img>
       </div>
       <div>
        <p style={{margin:'3px'}}>{element}</p>
        <div style={{display: 'flex',gridGap:'10px'}}>
        {Modaldata?.products[element]?.map((att)=>{


            return <p style={{fontSize:'12px'}}>{att?.attribute_name}  :  {att?.attribute_value}</p>
        })}
        </div>
        
        </div>
    </div>
    }})}
    
   
  
   
    
        </div>
        </Fade>
    
</div>
</div>

</div>
</Modal.Body>
<Modal.Footer>
  <button className="viewdetails" onClick={()=>setshow(false)}>
    Close
  </button>
  <button className="edit-inv-btn"  onClick={()=>window.open(Modaldata?.link,"_blank")}>
    print 
  </button>
</Modal.Footer>
</Modal>
    
    :""}
    
     
    
    </>
  )
}

export default MyOrders