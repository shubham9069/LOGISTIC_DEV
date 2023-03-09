import React, { useState,useContext, useEffect } from 'react'
import './selectitem.css'
import { furniture,kitchen,sofa } from '../assest/Exportimage'
import Toast from '../../Toast'
import axios from '../../axios'
import { useNavigate,Link, useParams, Navigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Fade from 'react-reveal/Fade';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import HeadShake from 'react-reveal/HeadShake';


const SelectItem = () => {
    const navigate = useNavigate()
    const {userToken,enquiry_id} = useContext(AuthContext)
    const [product,setproduct] =useState([])
    const [productAtt,setproductAtt] =useState([])
    const [enquiry_data,setEnquiry_Data] =useState([])
    const [isLoading,setIsLoading] = useState(true)
 
    const [show, setShow] = useState(false);
    const [data, setdata] = useState();
    const [spy,setSpy] = useState(false)

    const room_id = useParams().room_id
    console.log(room_id)
 
        

   

    const handlechange=(e)=>{
      // console.log(e.target.value)
        // e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        setdata({...data,[name]:value})
    }

    const filter_product=(product_id)=>{
        const arr = product?.filter((element)=>{
            
            return element.id==product_id
        })
        setproductAtt(...arr)
        setShow(true)
      
        
    }
    const show_data=(input_name,attribute_name)=>{
      
     
      // console.log(enquiry_data?.products[productAtt?.name])
      
      
      var array = enquiry_data?.products[productAtt?.name]?.some((element,index)=>{
       
        return element.attribute_value==input_name && element?.attribute_name== attribute_name
      })
      return array
      
      // return (first?.attribute_value)
    } 
   

    const getroom_attr =async()=>{
        try{
            
            const response= await axios({
              method: "get",
             url:`/products?room_id=${room_id}`,
              headers:{
               'Authorization': `Bearer ${userToken}`
              }
              } )
             
             if(response.status===200){
              const data = response.data;
              setproduct(data?.products);
              Toast(data.message,response.status)
              
              
             }
           }
           catch(err){
            const error = err.response.data
            Toast(error.message);
            
         
         
           }
         

    }
    

    useEffect(() => {
        try{
            getroom_attr()
            enqdata(enquiry_id);
        }
        catch(err){

        }
        finally{
          
          
            setIsLoading(false)
        }

    },[])


   
   const enqdata =async(id)=>{
  
    try{
        
        const response= await axios({
          method: "get",
         url:`get_details?enquiry_id=${id}&room_id=${room_id}`,
          headers:{
           'Authorization': `Bearer ${userToken}`
          }
          } )
         
         if(response.status===200){
          const data = response.data;
          setEnquiry_Data(data.enquery)
          Toast(data.message,response.status)
          
          
         }
       }
       catch(err){
        const error = err.response.data
        Toast(error.message);
        
     
     
       }
     

}


    const update_product=async()=>{
        
        if(!data){
             setSpy(!spy);
             return Toast("plx fill attributres ")
        } 
        
         const obj={...data,enquiry_id,product_id:productAtt?.id}
        try{
            setIsLoading(true)
            const response= await axios({
              method: "post",
             url:`/add_item`,
             data:obj,
              headers:{
               'Authorization': `Bearer ${userToken}`
              }
              } )
             
             if(response.status===200){
              const data = response.data;
              enqdata(enquiry_id)
                setdata()
                setShow(false)
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
    enquiry_id ?
    <>
    <div className="selectitem section-padding">
    <div className="container">
    <Fade top>
        <div className="selectitem-heading ">
        <h3>What are the major items you want to move?</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Accumsan pharetra ac ullamcorper congue aliquam vel. Feugiat sagittis mattis lacus nibh. Nec sem fringilla euismod adipiscing a. Nunc.</p>
    </div>
    </Fade>
    
    
    <div className="selectitem-box center-div">
    <div className="selectitem-card1">
    <div className="selectitem-card-img1 center-div">
        <p>furniture</p>
    </div>
    {product?.map((element)=>{
      
        return <div className='selectitem-card-content ' onClick={()=>filter_product(element.id,element.name)}>
        <div className='center-div'>
        <img src={element?.icon}/>
        <p style={{margin:'0'}}>{element.name || "hjvvh"}</p>
        </div>
        {/* <input type="radio" id="huey" name="drone" checked={enquiry_data?.products true:false} ></input> */}
    </div>
    })}
    
    </div>
    {/* <div className="selectitem-card1">
    <div className="selectitem-card-img2 center-div">
        <p>furniture</p>
    </div>
    {roomsAtt?.map((element)=>{
        return <div className='selectitem-card-content '>
        <div className='center-div'>
        <img src={sofa}/>
        <p style={{margin:'0'}}>bed</p>
        </div>
        <input type="radio" id="huey" name="drone" value="huey" ></input>
    </div>
    })}
    
    </div>
    <div className="selectitem-card1">
    <div className="selectitem-card-img3 center-div">
        <p>furniture</p>
    </div>
    {roomsAtt?.map((element)=>{
        return <div className='selectitem-card-content '>
        <div className='center-div'>
        <img src={sofa}/>
        <p style={{margin:'0'}}>bed</p>
        </div>
        <input type="radio" id="huey" name="drone" value="huey" ></input>
    </div>
    })}
    
    </div> */}

    </div>

    </div>
    </div>
    <div className="container section-padding">
        <div className="selectitem-btn center-div">
        <button onClick={()=>navigate('/rooms')} type="button" className="selected-button link-a" style={{background: '#E1E0E0'}}>NextRoom</button>
        
            
        </div>
        <div className="selectitem-btn-text">

        <p>Do you know  you can save this progress</p>
        </div>
        
    </div>

    <Modal show={show} onHide={()=>{setdata();setShow(false)}} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>selcted your item </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-attr center-div" >
        {productAtt?.attributes?.map((element)=>{
          var data = JSON.parse(element?.value)
            return  <Form.Group className="mb-3 d-flex " controlId="formBasicPassword" style={{gridGap:'20px',}}>
        <Form.Label style={{}} >{element.name+" : "}</Form.Label>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        
        {data?.rows?.map((item)=>{
          
          return  <div>
          <HeadShake spy={spy}>
        <input type="radio" value={item?.value} defaultChecked={show_data(item?.value,element?.name)}  style={{marginLeft:'1rem',width:'17px',height:'17px'}} name={element?.name} onChange={handlechange} />
        <label style={{padding:'0 10px'}}>{item?.value}</label>
        </HeadShake>
        </div>
        })}
        </div>
       
      </Form.Group>
        })}
      
      </Modal.Body>
        <Modal.Footer>
          <button  className="selected-button" style={{background: '#E1E0E0'}} onClick={() =>{setdata();setShow(false)}}>
            Close
          </button>
          <button className="selected-button" style={{background: '#088FD8',color:'white'}} onClick={update_product} >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
    :
    <Navigate to="/getestimate1"  />
  )
}

export default SelectItem