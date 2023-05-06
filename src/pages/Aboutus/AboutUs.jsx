
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Loader from '../../Loader'
import Toast from '../../Toast'
import './Aboutus.css'




const AboutUs = () => {
  const [content,setcontent] = useState({})
  const [isLoading,setIsLoading] = useState(true)


  const AboutUs =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:`/about`,
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setcontent(data?.about)
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
    AboutUs()
    document.title="About-us"

  },[])
  return (
    <>
      {isLoading &&(<Loader/>)}
        <top>
      <div className="about-us-top" style={{background:`url(${content?.banner}) no-repeat center `}}>
        {/* <h1>{content?.name}</h1> */}
      </div>

      <div className="about-us-bottom">
        <div className="about-us-bottom-container">
          <h1>who are we</h1>
          <p id="description-text"   dangerouslySetInnerHTML={{__html: `${content?.content}`}}/>
          <div className="">
            <button className="btn-design" >home</button>
          </div>
        </div>
      </div>
    </top>

    {/* <botton>
      <div className="bottom">
        <h1>our people</h1>
        <div className="people">
          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3>Shubham kaushik </h3>
            <p>front-end design and devlopment </p>
          </div>

          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3>shubham kaushik </h3>
            <p>back-end development</p>
          </div>

          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3> shubham kaushik </h3>
            <p>R&D by my self</p>
          </div>
        </div>
      </div>
    </botton> */}

    </>
  )
}

export default AboutUs