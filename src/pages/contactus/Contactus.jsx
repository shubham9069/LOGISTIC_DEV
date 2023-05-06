import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import axios from '../../axios'
import Toast from '../../Toast'
import './freeconsult.css'
import validator from 'validator'
import Loader from '../../Loader'


const FreeConsult = () => {
  const [isLoading,setIsLoading] = useState(false)
  document.title="Contact-us"
  const [contact,setContact] = useState({
    name:"",
        mobile:"",
        email:"",
        subject:"",
        message:""
})
const handleChange = (e) => {

  setContact({...contact,[e.target.name]:e.target.value})
}
const Contact_form = async(e)=>{
  const {name, mobile, email, subject, message} = contact
  e.preventDefault()

   if( !email || !message || !mobile ) return Toast("please fill properly")
   if( !validator.isEmail(email)) return Toast("email is not valid")
   if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
 

   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/add_contact',
      data:{
        name,mobile,email,subject,message
      },

     })
     
     if(response.status===200){
      const data = response.data;
     
      Toast(data.message,response.status)
      
     }
   }
   catch(err){
    const error = err.response.data
    Toast(error.message)

   }
   finally{
    setIsLoading(false)
   }
}


    var arr =[
       
        {
            images:'images/truckLoad.png',
            h1:"All Over india",
            h6:"Production - Manager",
            p:[
                'Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting..'
            ]
        },

    ]
  return (
    <>
{isLoading && (<Loader />)}
<div className="about-us-top" style={{background:`url(images/faq.png)`}}>
        <h1>Free Consulting</h1>
      </div>
      {
        arr?.map((element,index)=>{
            
            return <div className="free-consulting-conatiner container " style={index%2!=0 ? {flexDirection:'row-reverse'}:{flexDirection:'row'}}>
      <div style={{display: 'flex', alignItems:'center',justifyContent: 'center'}}>
        <img src={element?.images} id="free-consulting-img"  style={{transform: 'scalex(-1)'}} />
        </div>
        <div className='content-freeconsult'>
            <h2 >{element?.h1}</h2>
            {/* <h6>{element?.h6}</h6> */}
            {element.p?.map((p_content)=>{

                return <p>{p_content}</p>
            })}
            

        </div>
      </div>
        })
      }

      <div className="free-consulting-conatiner container " style={{flexDirection:'row-reverse'}}>
      <div style={{display: 'flex', alignItems:'center',justifyContent:'center'}}>
        <img src='images/women.jpg' id="free-consulting-img"  />
        </div>
        <div className='content-freeconsult'>
        <h2 >CONTACT WITH US</h2>
            <h6>Please Give us A Feedbackm so we will work on it .</h6>
            <Form className='free-consult-form'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name='name' onChange={handleChange} />
      </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Phone" name='mobile' onChange={handleChange}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject" name='subject' onChange={handleChange}/>
      </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name='email' onChange={handleChange}/>
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} name="message" onChange={handleChange}  />
      </Form.Group>
      <button className='btn-design mx-auto' onClick={Contact_form}> submit</button>
            </Form>
        </div>
      </div>
     








    </>
  )
}

export default FreeConsult