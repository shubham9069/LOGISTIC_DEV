import { Toast } from 'bootstrap'
import React,{useEffect,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { Banner, FlatRent } from '../../homepage/Exportfile'
import Contact_Form from '../servicepage/contact-form/Contact_Form'
import Question from '../servicepage/question/Question'
import './FlatforRent.css'


const FlatforRent = () => {
  const [citydata,setcityData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams()
  const pathname = useLocation()
  

  const cityfun =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:`/get_city_detail?city_id=${id}`,
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setcityData(data?.cities)
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

  var star =[]
  for(var i=0; i<rating;i++){
      star.push(<i class="bi bi-star-fill"></i>)
  }
  return star
}



  useEffect(() => {
    cityfun()

  },[pathname])



  return (
    <>
    {!isLoading?
    <>
  <Banner  title={citydata?.banner_title} banner={citydata?.banner}/>
    <div class="container section-padding">
    <p id="description-text"   dangerouslySetInnerHTML={{__html: `${citydata?.content}`}}/>
    </div>

    <Question QuesArr={citydata?.faq}/>
      <FlatRent  title={"Flat For Rent"}/>
    </>
    :null}
    </>
  )
}

export default FlatforRent