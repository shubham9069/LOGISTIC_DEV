import { Toast } from 'bootstrap'
import React, { useState,useContext,useEffect } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { Link } from 'react-router-dom'
import Loader from '../../Loader'



const FlatRent = ({title}) => {
  const [pack,setpack]= useState([1,2,3,4,5,6,7,8,9,0])



  const {HomePage,setHomePage} = useContext(AuthContext)
    const {city } = HomePage
    const [isLoading,setIsLoading]=useState(false)


    const cityfun =async () =>
    {
        try{
            setIsLoading(true)
            const response= await axios({
              method: "get",
             url:'/get_cities',
              
              } )
             
             if(response.status===200){
              const data = response.data;
              setHomePage((p)=>({...p,["city"]:data?.cities}))
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






    useEffect(() => {
        !city?.length ? cityfun():setIsLoading(false)

    },[])
  return (
   <>

<div className="section-padding flat-rent">
<div className="flat-rent-a">
    <a >Packers & Movers</a>
    
</div>




<div className="packer ">
<div className=" packer-and-mover" >
{city?.map((element) =>{

  return <>
  <Link to={'/packer-and-movers-in-'+element?.slug} style={{}} >Packers & Movers In {element?.name} </Link>
    
  </>
})}
    


</div>


</div>





</div>
   </>
  )
}

export default FlatRent