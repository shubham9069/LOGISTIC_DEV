import React,{useState,useContext} from 'react'
import '../getestimate2/getestimate.css'
import { Link, useNavigate } from 'react-router-dom'
import { wallframe } from '../assest/Exportimage'
import axios from '../../axios'
import Toast from '../../Toast'
import { AuthContext } from '../../AuthProvider'
import HeadShake from 'react-reveal/HeadShake';


const GetEstimate = () => {
  const navigate = useNavigate()
  const {userToken,setEnquiry_id} = useContext(AuthContext)
  const [date,setDate] = useState("")
 const [bhk,setBhk] = useState("")
 const [from_location,setFrom_location] = useState("")
 const [to_location,setTo_location] = useState("")
 const [isLoading,setIsLoading] = useState("")
 const [spy,setSpy] = useState(false)


 const addorder=async(e)=>{
    
  e.preventDefault();

  if(!bhk || !date || !from_location || !to_location) {
    setSpy(!spy)
    return Toast("please fill all details")
    
  } 
 
  try{
   setIsLoading(true)
   const response= await axios({
     method: "post",
    url:'/add-order',
     data:{
       bhk,date,from_location,to_location
     },
     headers:{
      'Authorization': `Bearer ${userToken}`
     }
     } )
    
    if(response.status===200){
     const data = response.data;
     Toast(data.message,response.status)
     window.localStorage.setItem('enquiry_id', JSON.stringify(data?.enquery_id));
     setEnquiry_id(data?.enquery_id)
     navigate('/getestimate2',{state:{id:data?.enquery_id}})
     
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
        <div className="section-marginX center-div">
<div className="getestimate">
<div className="getestimate-top">
  <img src={wallframe} style={{width: '100%'}}/>
</div>
<div className="getestimate-bottom center-div">
  <div >
    <p>I Am Shifting My </p>
    <HeadShake spy={spy}>
    <select className="getestimate-input" value={bhk} onChange={e=>setBhk(e.target.value)}>
    <option selected value="" >BHK</option>
    <option value='1'>1BHK</option>
    <option value='2'>2BHK</option>
    <option value='3'>3BHK</option>
    </select>
    </HeadShake>
    <p>From</p>
    <HeadShake spy={spy}>
    <input className="getestimate-input" placeholder='Apartment Name/Locality' style={{minWidth: '230px'}} value={from_location} onChange={e=>setFrom_location(e.target.value)}  />
    </HeadShake>
  </div>

  <div >
    <p>To</p>
    <HeadShake spy={spy}>
    <input className="getestimate-input" placeholder='Apartment Name/Locality' style={{minWidth: '230px'}} value={to_location} onChange={e=>setTo_location(e.target.value)} />
    </HeadShake>
    <p>On</p>
    <HeadShake spy={spy}>
    <input type="datetime-local" id="meeting-time" className='getestimate-input'
       name="meeting-time" value={date} onChange={(e)=>setDate(e.target.value)}
       min="" max=""></input>
    </HeadShake>
    
  </div>

  <div  style={{ width:'300px'}}> 
  <button   className="getestimate-btn link-a" onClick={addorder}> Next </button>
 
  </div>
  <Link to="/rooms" className="lighptgrey-p link-a" style={{cursor:'pointer'}}>Previous enquiry </Link>
</div>


</div>
</div>
    </>
  )
}

export default GetEstimate