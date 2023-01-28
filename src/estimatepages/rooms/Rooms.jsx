import React, { useEffect,useContext,useState } from 'react'
import './rooms.css'
import Toast from '../../Toast'
import axios from '../../axios'
import { useNavigate,Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Fade from 'react-reveal/Fade';

const Rooms = () => {
    const {userToken} = useContext(AuthContext)
const [isLoading,setIsLoading] =useState(true)
const [roomsdata,setRoomData] = useState([])


const rooms_getdata =async () =>
{
    try{
        setIsLoading(true)
        const response= await axios({
          method: "get",
         url:'/rooms',
          headers:{
           'Authorization': `Bearer ${userToken}`
          }
          } )
         
         if(response.status===200){
          const data = response.data;
          setRoomData(data?.rooms)
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
    rooms_getdata();
},[])
  return (
    <>
    <div className="section-padding rooms">
    <div className="container">
    <Fade top>
    <div className="rooms-heading ">
        <h3>What are the major items you want to move?</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Accumsan pharetra ac ullamcorper congue aliquam vel. Feugiat sagittis mattis lacus nibh. Nec sem fringilla euismod adipiscing a. Nunc.</p>
    </div>
    </Fade>

    <div className="rooms-box center-div">
    {roomsdata?.map((element, index) =>{
      
        return  <Link to={'/selectitem/'+element.id} className="rooms-card1 center-div">
    <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" ></img>
    <p>{element?.name}</p>
    </Link>
    })}
   
    </div>
     </div>
    </div>
    </>
  )
}

export default Rooms