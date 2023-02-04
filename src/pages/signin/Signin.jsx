import React,{useState} from 'react'
import './signin.css'
import axios from '../../axios'
import Toast from '../../Toast'
import { useNavigate,useLocation } from 'react-router-dom'
import validator from 'validator';
import {image1,image2,image3} from '../assest/Exportimage'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [mobile,setMobile] = useState("")
  const [isLoading,setIsLoading] = useState("")
  const navigate = useNavigate()
  const location =useLocation();
  const from = location?.state?.from?.pathname
  // console.log(from)


  const SubmitForm=async(e)=>{
    
     e.preventDefault();

     if(!mobile ) return Toast("please fill your mobile no")
    if(!validator.isMobilePhone(mobile)) return Toast("please should be valid ")
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/signup',
        data:{
          mobile
        },
       })
       
       if(response.status===200){
        const data = response.data;
        Toast(data?.otp,response.status)
        navigate('/otp' , {state:{mobile,from}})
        
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
  return (
    <>
<div className="signin ">
    <div className='container '>
      <h1>Find out how much your moving will cost you?</h1>
      <p className='lighptgrey-p'>Trusted by 100k+ happy customers.</p>
      <form>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label input-name">Mobile Number</label>
    <input type="number" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    <div id="emailHelp" className="form-text lighptgrey-p">We'll never share your Phone with anyone else.</div>
  </div>
  {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label input-name">Password</label>
    <input type="password" className="form-control form-input" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check" >
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <div className='d-flex' style={{justifyContent: 'space-between'}}>
    <label className="form-check-label" for="exampleCheck1 ">Remember me</label>
    <Link to='/forgetpassword' className="form-check-label signin-span link-a" for="exampleCheck1 "> Forget Password</Link>
    </div>
  </div> */}
  <button  className="btn btn-primary form-btn" onClick={SubmitForm}>Calculate Your Moving Cost</button>
</form>
{/* 
    <div className='signin-bottom center-div'>
      <p className="lighptgrey-p">Or Sign in With</p>
      <div>
      <img src={image1} className='signin-with-img'></img>
      <img src={image2} className='signin-with-img'></img>
      <img src={image3} className='signin-with-img'></img>

      </div>
      <p className='lighptgrey-p m-0' >Create New Account ? <Link  to='/signup' className='signin-span link-a'>Sign up</Link></p>
    </div> */}
    </div>
   </div>
    </>
  )
}

export default Signin