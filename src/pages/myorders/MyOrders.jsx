import React, { useContext, useState,useEffect } from 'react'
import './myorders.css'
import Modal from 'react-bootstrap/Modal';
import axios from '../../axios';
import Toast from '../../Toast';
import AuthProvider, { AuthContext } from '../../AuthProvider';
import { waitForElementToBeRemoved } from '@testing-library/react';
import {sofa} from '../../estimatepages/assest/Exportimage'
import { Fade } from 'react-reveal'
import { Group6 } from '../assest/Exportimage';
import Form from 'react-bootstrap/Form';
import Loader from '../../Loader';


const MyOrders = () => {
  const {userToken}= useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(true)
    const [show,setshow] = useState(false)
    const [Modaldata, setModaldata] = useState({})
    const [Allorders,setAllorders] = useState([])
    const [review,setReview] = useState(false)
    const [reviewData,setReviewData] = useState('');
    const [ratingStar,setRatingStar] = useState(0)
    const [review_desc , setReview_Desc] = useState("")
    const [images,setImages] = useState("");

    const [updatetoogle,setupdateToogle] = useState(false)


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
    },[]);



const reviewfun =(enq_data)=>{
setModaldata(enq_data);
console.log(enq_data);
if(enq_data.reviews!=null){
  
  setRatingStar(enq_data?.reviews?.rating)
  setReview_Desc(enq_data?.reviews?.review);
  setupdateToogle(true);
  
}
else{
setRatingStar("")
  setReview_Desc('');
  setupdateToogle(false)

}
setReview(true)

}
const add_review = async(e)=>{
  e.preventDefault()

   if(!ratingStar) return Toast("choose minimum 1 star")

 
   var form = new FormData()
 
  form.append('rating',ratingStar)
  form.append('review',review_desc)
  form.append('enquiry_id',Modaldata?.id)
   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/add-review',
      data:form,
      headers: {
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
        
      },
     })
     
     if(response.status===200){
      const data = response.data
     all_enquiry();
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
const update_review = async(e)=>{
  e.preventDefault()

   if(!ratingStar) return Toast("choose minimum 1 star")

 
   var form = new FormData()
 
  form.append('rating',ratingStar)
  form.append('review',review_desc)
  form.append('review_id',Modaldata?.reviews?.id)
   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/update-review',
      data:form,
      headers: {
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
        
      },
     })
     
     if(response.status===200){
      const data = response.data
      setReview(false)
     all_enquiry();
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

    
  return (
    <>
    {isLoading &&(<Loader/>)}
    {!Allorders?.length && (<div className='container section' style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center',gridGap:'30px',marginBottom:"2rem" }}>
    <img src={Group6} alt="no-item" style={{ maxHeight: 450, maxWidth: 350,width:'80%',textAlign:'center' }}></img>
    <h6 style={{fontSize: '22px',color:'#088FD8'}}> You have no enquiry</h6>
   
</div>)}
    
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
    <h6>Move Planner</h6>
        <p style={{marginBottom:0}}>{element?.move_planner ==null?"waiting for allocation " :element?.move_planner?.name}</p>
        <p>{element?.move_planner ==null?"waiting for allocation " :element?.move_planner?.mobile}</p>
    </div>
    {/* <div style={{flex:1}}>
    <h6>Move Manager</h6>
    <p>{element?.move_manager ==null?"waiting for allocation " :element?.move_manager }</p>
    </div> */}

    </div>
    <div className="myorder-box-lower">
    <div >
        
        {element?.status==1&&(<p style={{color:'red'}}>Pending </p>)}
        {element?.status==2&&(<p style={{color:'grey'}}>Send Qoutation  <img src='images/check.gif' style={{width:'20px'}}></img></p>)}
        {element?.status==3&&(<p style={{color:'green'}}>Approved</p>)}
        {element?.status==4&&(<p style={{color:'red'}}> Rejected</p>)}
        {element?.status==5&&(<p style={{color:'green'}}> Completed  <img src='images/check.gif' style={{width:'20px'}}></img> </p>)}
        <p style={{}}>#Track id : {element?.tracking_id == null ? "In Process " : element?.tracking_id}</p>
    </div>
    <div >
    <button type="button" className='viewdetails' onClick={()=>{setModaldata(element);setshow(true)}}>View Details </button>
   {element?.status==5 &&(<button type="button" className='edit-inv-btn' onClick={()=>reviewfun(element)}>Review</button>)}
    </div>

    </div>


     </div>
     </div>
    )
    })}


    {Modaldata ? 

      <Modal show={show} onHide={()=>setshow(false)} scrollable={true} size='lg'>
<Modal.Header closeButton >
  <Modal.Title>Details</Modal.Title>
</Modal.Header>
<Modal.Body scrollable={true}>
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
<div style={{overflow:'hidden',marginBottom:'2rem'}}>
<h6>Items</h6>
{Modaldata?.rooms?.map((element)=>{


  return <>
  <p style={{margin:"1rem 0 " ,fontSize:"14px",background:"#e7f3fb",padding:" 0.3rem 0.5rem"}}>{element?.name}</p>
  <div className='itemlist-container'>
    
    {Object.keys(element?.data)?.map((key)=>{
        if(element?.data[key]?.attributes?.length)
        {
        return  <div className='item-list-box '>
              <div>
        <img src={element?.data[key]?.product_image} style={{width:25,height:25}} />
       </div>
       <div>
        <p style={{margin:'3px',fontSize:'13px',fontWeight:'600'}}>{key}</p>
        <div style={{display: 'flex',gridGap:'10px',flexWrap:"wrap"}}>
        {element?.data[key]?.attributes?.map((att)=>{


            return <p style={{fontSize:'10px',fontWeight:'600',color:'#545454',margin:'0'}} ><span style={{fontSize:'10px',fontWeight:'600',color:'#545454'}}>{att?.attribute_name}</span> : <span style={{fontSize:'10px',fontWeight:'500',color:'#545454'}}>  {att?.attribute_value}</span></p>
        })}
        </div>
        
        </div>
    </div>
    }})}
    </div>
        </>
})}
    
</div>
</div>

</div>
</Modal.Body>
<Modal.Footer>
  <button className="viewdetails" onClick={()=>setshow(false)}>
    Close
  </button>
  {Modaldata?.quotation?.is_updated ? <button className="edit-inv-btn"  onClick={()=>window.open(Modaldata?.link,"_blank")}>
    Print 
  </button>
  :null
  }
</Modal.Footer>
</Modal>
    
    :""}
    
     
     
    <Modal show={review} onHide={()=>setReview(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review </Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <p style={{fontSize:14}}>Please Give Us a Feedback </p>

        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <input className='profile-input' type='file'  name="images" multiple  onChange={e => setImages(e.target.files)}></input>
      </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="d-flex" style={{gridGap:7}}>{
            [...Array(5)]?.map((element,index)=>{
                let giving_star = index+1
                {/* <i className={giving_star>rating? "bi bi-star px-1": "bi bi-star-fill px-1"} onClick={()=>setRating(giving_star)}></i> */}
                return <div 
                style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
                background:giving_star>ratingStar?'#D9D1D1':"#fed001",
                height:25,
                width:25
                
                }}
               onClick={()=>setRatingStar(giving_star)}>

                </div>
            })
        }</Form.Label>
        <Form.Control as="textarea" rows={5} value={review_desc} style={{fontSize:14}} onChange={(e)=>setReview_Desc(e.target.value)} />
      </Form.Group>
        
        
        </Modal.Body>
        <Modal.Footer>
          <button className='edit-inv-btn' onClick={updatetoogle ? update_review : add_review} >
            submit 
          </button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default MyOrders