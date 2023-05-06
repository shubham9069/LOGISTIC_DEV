import { Toast } from 'bootstrap'
import React,{useEffect,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { Banner, FlatRent } from '../../homepage/Exportfile'
import Contact_Form from '../servicepage/contact-form/Contact_Form'
import Question from '../servicepage/question/Question'
import './FlatforRent.css'
import Loader from '../../Loader'
import { Helmet } from 'react-helmet'


const FlatforRent = ({id}) => {
  const [citydata,setcityData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  
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
     <Helmet>
                
                <title>{`packer-and-movers-in-${id}`}</title>
                
    <meta name="keywords" content={`packers and movers in ${id}, best packers and movers in ${id}, packers and movers near me, packers and movers, movers and packers  `}></meta>
            </Helmet>
    {!isLoading?
    <>
  <Banner  title={citydata?.banner_title} banner={citydata?.banner}/>
    <div class="container section-padding">
    <p id="description-text"   dangerouslySetInnerHTML={{__html: `${citydata?.content}`}}/>
    </div>

    <Question QuesArr={citydata?.faq}/>
      <FlatRent  title={"Packer And Movers"}/>
    </>
    :<Loader />}
    </>
  )
}

export default FlatforRent