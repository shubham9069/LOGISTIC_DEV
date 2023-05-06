import React,{useEffect, useState} from 'react'
import './contact_form.css'
import Form from 'react-bootstrap/Form';
import { packermover,warehouse,smiley,people,move } from '../assest/exportfiles';
import axios from '../../../axios';
import Toast from '../../../Toast';
import Loader from '../../../Loader';
import validator from 'validator'



const Contact_Form = ({Title,img}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [contact,setContact] = useState({
      name:"",
      mobile:"",
      email:"",
      
  })

  const handleChange = (e) => {

      setContact({...contact,[e.target.name]:e.target.value})
  }

  const Contact_form = async(e)=>{
    const {name, mobile, email} = contact
    e.preventDefault()
  
     if( !email  || !mobile ) return Toast("please fill properly")
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
   

     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/add_contact',
        data:{
          name,mobile,email
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

  const number =(e)=>{
    console.log(e)
const myNum = document.querySelectorAll('.gowingName')
// console.log(myNum.innerText)
let speed = 150;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count)
    
    let newSpeed = Math.ceil(target_count / speed)
    
    const updateNumber = () => {
        init_count +=  newSpeed;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 30)
        }else {
          myCount.innerText=myCount.innerText+"+"
      }
        
    }
    
    updateNumber();
})
  
}


useEffect(()=>{
 number();

},[])
  return (
    <>
    {isLoading &&(<Loader />)}
     <div className="row py-5 container contact-1200px d-flex justify-content-center section-padding mx-auto">
               <div className="col-sm-12 col-lg-8 h-100 d-flex align-items-center" Style={'flex:1;flex-direction:column'}>
               <div  className="contact-text" style={{minHeight:'100px'}}>
               <h1>{Title}</h1>
               <p>Find out how much your moving will costt your</p>
               </div>
               <img src={img} style={{width:'100%'}}></img>
           
               </div>
  <div className="col-sm-12 col-lg-4  " Style={'flex:1;width:auto'}>
              <div className="contact-text"  style={{minHeight:'100px'}}>
              <h4>Find out how much your moving will cost your</h4>
              </div>
                   <Form >
      <Form.Group className="from-contact" controlId="formBasicEmail">
        <Form.Label>Full Name </Form.Label>
        <Form.Control type="text"  style={{height:'50px'}} name="name" value={contact?.name} onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  style={{height:'50px'}}  name="email" value={contact?.email} onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number"  style={{height:'50px'}}  name="mobile" value={contact?.mobile} onChange={handleChange} />
      </Form.Group>
     
      <button className="btn-calculatecost" onClick={Contact_form}>
        Calculate moving Cost
      </button>
    </Form>
                   </div>
                      
                   </div>
       <div className="icon-info section-padding" style={{margin:'2rem 0'}}>
    <div>
      <img src={move} />
      <p className='gowingName'  data-count="50000">0</p>
      <p>House Movers</p>
    </div>
    <div>
      <img src={smiley} />
      <p className='gowingName'  data-count="10000">0</p>
      <p>Happy Customers</p>
    </div>
    <div>
      <img src={people} />
      <p className='gowingName'  data-count="500">0</p>
      <p>Corporate Client </p>
    </div>
    <div>
      <img src={warehouse} />
      <p className='gowingName'  data-count="160">0</p>
      <p>Warehouse</p>
    </div>
       </div>            
              
    </>
  )
}

export default Contact_Form