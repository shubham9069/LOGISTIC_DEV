import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Loader from '../../Loader'
import Toast from '../../Toast'
import Question from '../servicepage/question/Question'



const Faq = () => {
  const [faq,setfaq] = useState([])
  const [isLoading,setLoading] = useState(true)
    
    const getfaq =async () =>{

       try{
        
        const response= await axios({
          method: "get",
         url:'/get_faqs',
         })
         
         if(response.status===200){
          const data = response.data;
         setfaq(data?.faqs)
          // Toast(data.message,response.status)
          
         }
       }
       catch(err){
        const error = err.response.data
        Toast(error.message)
  
       }
       finally{
        setLoading(false)
       }
      
    
    }

    useEffect(()=>{

      getfaq();
    },[])
  return (
    <>
    {isLoading &&(<Loader/>)}
        <top>
      <div className="about-us-top" style={{background:`url(images/faq.png) no-repeat center `}}>
        {/* <h1>{content?.name}</h1> */}
      </div>

      <div className="about-us-bottom section-padding" style={{marginTop:'0px'}}>
        
         
       <Question  QuesArr={faq} />
          
        
      </div>
    </top>
    </>
  )
}

export default Faq