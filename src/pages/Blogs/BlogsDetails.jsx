import React, { useEffect, useState } from 'react'
import './Blogs.css'
import axios from '../../axios'
import Toast from '../../Toast'
import Loader from '../../Loader'
import { useParams } from 'react-router-dom'


const BlogsDetails = () => {
    const [isLoading , setIsLoading] =useState(true)
    const [blogs,setBlogs] = useState([])
    const {id} = useParams()
    document.title="BlogsDetails"
      

  const cityfun =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:`get_blog_details?blog_id=${id}`,
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setBlogs(data?.blog)
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
    cityfun()

  },[])
  return (
    <>
    {isLoading &&(<Loader />)}

    <div className="d-flex section-padding" style={{gridGap:30}}>
    <div className="" style={{flex:3 }}>

<div className="product-details-left">
  <img src={blogs?.image} loading="lazy"/>
  
</div>

<div className="product-details-right ">
  <h2>{blogs?.heading}</h2>

 
  <p id="description-text" style={{height:'fit-content'}}  dangerouslySetInnerHTML={{__html: `${blogs?.content}`}}/> 
 
  </div>
  </div>

    
    <div className="blog-right blog-right-Details" style={{}}>
        <h4 style={{fontWeight:700 ,}}>Latest post </h4>

        {[...Array(3)]?.map((a)=>{

            return    <div className=" d-flex" style={{gridGap:20,margin:'1.5rem 0'}}>
    <img src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" style={{width:70,height:70,borderRadius:50,objectFit:'cover'}}></img>
    <div>
        <p style={{color:'#55b4e8',marginBottom:0,fontSize:16,}}>Top programer </p>
        <p style={{fontWeight:500,marginBottom:0,}}>or an empty string for decorative images  </p>
    </div>

        </div>
        })}
     
    </div>
</div>

  



    </>
  )
}

export default BlogsDetails