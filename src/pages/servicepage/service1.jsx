import React, { useContext, useEffect, useState } from 'react'
import Contact_Form from './contact-form/Contact_Form'
import DomesticReloaction from './domestic/DomesticReloaction'
import Shifting from './shifting/Shifting'
import Review from './review/Review'
import Question from './question/Question'
import {FlatRent, Slider} from '../../homepage/Exportfile'
import Toast from '../../Toast'
import axios from '../../axios'
import { packermover,relocation } from './assest/exportfiles'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Loader from '../../Loader'




const Service1 = ({title}) => {
  const [isLoading,setIsLoading] = useState(true)
  const {HomePage,setHomePage} = useContext(AuthContext)
  const {testimonial} = HomePage
 
  const [serviceData,setServiceData] = useState([])
  const {service_id} = useParams()



  

  const servicedatafun =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:`/get_service_detail?service_id=${service_id}`,
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setServiceData(data?.service)
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
    // testimonialfun()
    servicedatafun()

  },[service_id])

  
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





  useEffect(() => {
      !testimonial?.length ? testimonialfun():setIsLoading(false)

  },[])

  
  return (
    <>
    {isLoading &&(<Loader/>)}
        <Contact_Form Title={serviceData?.banner_title} img={serviceData?.banner} />

        <DomesticReloaction title={serviceData?.second_block?.heading} img={serviceData?.second_block?.image} text={serviceData?.second_block?.text}/>
        <DomesticReloaction title={serviceData?.second_block?.heading} img={serviceData?.second_block?.image} flexdirection={"row-reverse"} text={serviceData?.third_block?.text}/>
        <Shifting list={serviceData?.list} title={serviceData?.fourth_block?.heading}  text={serviceData?.second_block?.text}  />
       
        <Review reviewArr = {testimonial}/>
        <Slider/>
        <Question QuesArr={serviceData?.faq}/>
        <FlatRent title={"Packers and Movers"}/>
    </>
  )
}

export default Service1;
