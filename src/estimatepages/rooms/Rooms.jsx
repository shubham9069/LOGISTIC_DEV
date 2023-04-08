import React, { useEffect,useContext,useState } from 'react'
import './rooms.css'
import Toast from '../../Toast'
import axios from '../../axios'
import { useNavigate,Link,useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Fade from 'react-reveal/Fade';
import Loader from '../../Loader'


const Rooms = () => {
  const navigate = useNavigate()
    const {userToken,enquiry_id,setEnquiry_id} = useContext(AuthContext)
const [isLoading,setIsLoading] =useState(true)
const [roomsdata,setRoomData] = useState([]);
const [enquiry_data,setEnquiry_Data] =useState([])



const rooms_getdata =async () =>
{
    try{
        setIsLoading(true)
        const response= await axios({
          method: "get",
         url:`/rooms?enquiry_id=${enquiry_id}`,
          headers:{
           'Authorization': `Bearer ${userToken}`
          }
          } )
         
         if(response.status===200){
          const data = response.data;
          setRoomData(data)
          Toast(data.message,response.status)
          
          
         }
       }
       catch(err){
        const error = err.response.data
        // Toast(error.message);
        
     
     
       }
       finally{
        setIsLoading(false)
       }
     

}
   
const enqdata =async()=>{
  
  try{
      
      const response= await axios({
        method: "get",
       url:`all_details?enquiry_id=${enquiry_id}`,
        headers:{
         'Authorization': `Bearer ${userToken}`
        }
        } )
       
       if(response.status===200){
        const data = response.data;
        if(data?.enquery?.status == 5){
          setEnquiry_id("");
          window.localStorage.removeItem('enquiry_id');
          Toast("your previous enquiry has been completed plz fill new one ",200)
          navigate("/getestimate1");
          

          return 
        }
        setEnquiry_Data(data.enquery)
        Toast(data.message,response.status)
      
        
        
       }
     }
     catch(err){
      const error = err.response.data
      // Toast(error.message);
      
   
   
     }
     finally{
      setIsLoading(false)
     }
   

}


useEffect(()=>{
  if(!enquiry_id){
    Toast("no enquery found ")
    navigate("/getestimate1")
  } 
    rooms_getdata();
    enqdata()
},[])
  return (
    <>
    {isLoading &&(<Loader/>)}
    <div className="section-padding rooms">
    <div className="container">
    <Fade top>
    <div className="rooms-heading ">
        <h3>What are the major items you want to move?</h3>
        <p>Please provide the item details like brand, quantity, size etc for better calculation of the price</p>
    </div>
    </Fade>

    <div className="rooms-box center-div">
    {roomsdata?.rooms?.map((element, index) =>{
      
        return  <Link to={'/selectitem/'+element.id} state={element}  className="rooms-card1 center-div">
    <img src={element?.image}></img>
    <p>{element?.name}</p>
    </Link>
    })}
    {roomsdata?.bedrooms?.map((element, index) =>{
      
        return  <Link to={'/selectitem/'+element.id}  state={element} className="rooms-card1 center-div">
    <img src={element?.image}></img>
    <p>{element?.name}</p>
    </Link>
    })}
   
    </div>
    <div className="center-div">
    <a onClick={()=>navigate('/orderplace',{state:{enquiry_data}})} type="button" className="selected-button link-a " style={{background: '#088FD8',color:'white'}}>place your order</a>
    </div>
     </div>
    </div>
    </>
  )
}

export default Rooms