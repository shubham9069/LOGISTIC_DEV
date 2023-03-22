import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Toast from '../../Toast'
import './ourcustomer.css'
import Carousel from 'react-bootstrap/Carousel';




const Ourcustomer = () => {
    const {HomePage,setHomePage} = useContext(AuthContext)
    const {testimonial } = HomePage
    const [isLoading,setIsLoading]=useState(false)


    const testimonialfun =async () =>
    {
        try{
            setIsLoading(true)
            const response= await axios({
              method: "get",
             url:'/get_all_reviews',
              
              } )
             
             if(response.status===200){
              const data = response.data;
              setHomePage((p)=>({...p,["testimonial"]:data?.reviews}))
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
    const getstar =(rating) => {
        var total = 5
        var star =[]
        for(var i=0; i<rating;i++){
            star.push(<div 
                style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
                background:"#fed001",
                height:20,
                width:20
                
                }}
               >
    
                </div>)
        }
        for(var i=0; i<total-rating;i++){
            star.push(<div 
                style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
                background:'#D9D1D1',
                height:20,
                width:20
                
                }}
               >
    
                </div>)
        }
        return star
    }





    useEffect(() => {
        !testimonial?.length ? testimonialfun():setIsLoading(false)

    },[])
  return (
    <>
    
         <div className="py-5 section-margin section-padding">
       
       <div className="container">
           <p className="section-subheading">OUR CUSTOMERS LOVES US</p>
           <h2 className="section-heading">Our company is going beyond its limits for past 5 years and we are reaching every possible door,s which are open for us.</h2>

           <div className="row py-5 " id="width1000">
               <div className="col-sm-12 col-lg-8" Style={'flex:1'}>

               <video src="images/budget_2_2.mp4" 
                muted
                 autoPlay
                loop  id="myVideo"/>
           
               </div>
               <div className="col-sm-12 col-lg-4 " Style={'flex:0.7'}>
               <Carousel  prevIcon={<i class="bi bi-arrow-left-circle-fill"></i>} nextIcon={<i class="bi bi-arrow-right-circle-fill"></i>}>
               {testimonial?.map((element)=>{

                return  <Carousel.Item>
      <div className="testimonial-container h-100">
                       <div className="row" Style="height:80%;">
                           <div className="col-6 mt-auto">
                               <img src={element?.avatar} alt="" Style="height: 70px;width: 70px; border-radius: 50%;"/>
                           </div>
                           <div className="col-6" Style="margin-top:auto;">
                               <div className="d-flex" Style="justify-content:flex-end; ">
                           {getstar(Number(element?.rating))}
                               </div>
                               
                           </div>
                           <div className="col-12">
                               <p align="justify" className="py-3 our-customer-right-text">{element?.review}</p>
                           </div>
                       </div>
                       
                       <div className="d-flex" Style="flex-direction:column; justify-content:flex-end; height:20%;">
                           <b className="pt-5" Style={'font-weight: 800;font-size: 14.4354px;line-height: 15px; margin-bottom:0.5rem'}>{element?.customer_name}</b>
                           <span Style="font-weight: 400;font-size: 10px;line-height: 10px;">{element?.designation}</span>
                       </div>
                   </div>
       
      </Carousel.Item>
               })}
     
      
     
    </Carousel>
       </div>
       </div>
       </div>
   </div>
    </>
  )
}

export default Ourcustomer