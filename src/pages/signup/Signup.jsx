import React, { useContext, useState } from 'react'
import './signup.css'
import {image1,image2,image3} from '../assest/Exportimage'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Toast from '../../Toast'
import axios from '../../axios'
import validator from 'validator'


const Signup = () => {
  const {setUserData,setUserToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const {userToken} = useContext(AuthContext)
  const [isLoading,setIsLoading] = useState()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const  [agreement,setAgreement] = useState(false)
  const location =useLocation();
  const mobile = location?.state?.mobile
  const from = location?.state?.from?.pathname
   console.log(mobile)
  const user_signup = async(e)=>{
    e.preventDefault()
   const is_active = 1
     if(!name ||!email  ) return Toast("please fill properly")
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( agreement===false) return Toast("plz reead terms & condition ")

     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/edit-profile',
        data:{
          name,email,is_active,agreement,mobile
        },

       })
       
       if(response.status===200){
        const data = response.data;
        setUserToken(data?.accessToken);
            setUserData(data?.Customer)
            window.localStorage.setItem('userToken', JSON.stringify(data?.accessToken));
            window.localStorage.setItem('userData', JSON.stringify(data?.Customer));
        Toast(data.message,response.status)
        navigate(from || '/')
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
  return (
   <>
   <div className="signup ">
    <div className='container '>
      <h1>Fill Your details </h1>
      <p className='lighptgrey-p'>Please Fill This Form To Create Account</p>
      <form>
  <div className="mb-3">
    <label for="exampleInputname" className="form-label input-name">Name </label>
    <input type="text" className="form-control form-input" id="exampleInputname" aria-describedby="name" value={name} onChange={(e)=>setName(e.target.value)} />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label input-name">Email address</label>
    <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text lighptgrey-p">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3 form-check" >
    <input type="checkbox" className="form-check-input " id="exampleCheck1"  onChange={(e)=>setAgreement(!agreement)}/>
    <label className="form-check-label" for="exampleCheck1 input-name">I Agree With Your <span className='signup-span'>Terms & Condition</span></label>
  </div>
  <button type="submit" className="btn btn-primary form-btn" onClick={user_signup }>Submit</button>
</form>

    {/* <div className='signup-bottom center-div'>
      <p className="lighptgrey-p">Or Sign Up With</p>
      <div>
      <img src={image1} className='signup-with-img'></img>
      <img src={image2} className='signup-with-img'></img>
      <img src={image3} className='signup-with-img'></img>

      </div>
      <p className='lighptgrey-p m-0' >Already Have An Account? <Link  to='/signin' className='signup-span link-a'>Sign in</Link></p>
    </div> */}
    </div>
   </div>
   </>
  )
}

export default Signup