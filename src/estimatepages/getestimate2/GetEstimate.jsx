import React,{useState,useContext} from 'react'
import './getestimate.css'
import {wallframe} from '../assest/Exportimage'
import { Link,useNavigate,useLocation} from 'react-router-dom'
import axios from '../../axios'
import Toast from '../../Toast'
import { AuthContext } from '../../AuthProvider'
import HeadShake from 'react-reveal/HeadShake';

const GetEstimate = () => {
  const navigate = useNavigate()
  const {userToken} = useContext(AuthContext)
  const [from_floor,setFrom_Floor] = useState("")
 const [from_lift,setFrom_Lift] = useState("")
 const [to_floor,setTo_Floor] = useState("")
 const [to_lift,setTo_Lift] = useState("")
 const [isLoading,setIsLoading] = useState("")
 const [spy,setSpy] = useState(false)
const enquery_id = useLocation()?.state?.id

const updateorder=async(e)=>{
    
  e.preventDefault();

  if(!from_floor || !to_floor || !from_lift || !to_lift){
    setSpy(!spy)
    return Toast("please fill your all details")}
 
  try{
   setIsLoading(true)
   const response= await axios({
     method: "post",
    url:'/update-order',
     data:{
       from_floor,from_lift,to_floor,to_lift,enquery_id
     },
     headers:{
      'Authorization': `Bearer ${userToken}`
     }
     } )
    
    if(response.status===200){
     const data = response.data;
     Toast(data.message,response.status)
     navigate('/rooms',{state:{id:data?.enquery_id}})
     
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
    <p>I curretnly live on</p>
    <HeadShake spy={spy}>
    <select className="getestimate-input" value={from_floor} onChange={e=>setFrom_Floor(e.target.value)}>
    <option selected value="" >Floor</option>
    <option  >1st Floor</option>
    <option >2nd Floor</option>
    <option >3rd Floor</option>
    <option >4th Floor</option>
    <option >5th Floor</option>
    <option >6th Floor</option>
    <option >7th Floor</option>
    <option >More Then 8 Floor </option>
    </select>
    </HeadShake>
   
    <p>Floor with service fit</p>
    <HeadShake spy={spy}>
    <select className="getestimate-input" value={from_lift} onChange={e=>setFrom_Lift(e.target.value)}>
    <option selected value="" >Lift</option>
    <option value='1'>Available</option>
    <option value='0'>Not available</option>
    
    </select>
    </HeadShake>
  </div>

  <div >
    <p>I’m moving to</p>
    <HeadShake spy={spy}>
    <select className="getestimate-input" value={to_floor} onChange={e=>setTo_Floor(e.target.value)}>
    <option selected value="" >Floor</option>
    <option  >1st Floor</option>
    <option >2nd Floor</option>
    <option >3rd Floor</option>
    <option >4th Floor</option>
    <option >5th Floor</option>
    <option >6th Floor</option>
    <option >7th Floor</option>
    <option >More Then 8 Floor </option>
    </select>
    </HeadShake>
    <p>floor with service lift</p>
    <HeadShake spy={spy}>
     <select className="getestimate-input" value={to_lift} onChange={e=>setTo_Lift(e.target.value)}>
    <option selected value="" >Lift</option>
    <option value='1' >Available</option>
    <option value='0'>Not available</option>
    
    </select>
    </HeadShake>
  </div>

  <div style={{width:'300px'}}> 
  <buttom  className="getestimate-btn link-a" onClick={updateorder}> Next </buttom>
  </div>
</div>


</div>
</div>
    </>
  )
}

export default GetEstimate