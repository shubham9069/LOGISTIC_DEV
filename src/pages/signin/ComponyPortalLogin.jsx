import React, { useContext, useState } from 'react'

import { Link, useNavigate,useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import Toast from '../../Toast'
import axios from '../../axios'
import validator from 'validator'


const Signup = () => {
  const {setUserData,setUserToken} = useContext(AuthContext)
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setmobile] = useState("")
  const [isLoading,setIsLoading] = useState(false)
 
  const user_signup = async(e)=>{
    const re = /^[6-9]{1}[0-9]{9}$/;
    e.preventDefault()
   const is_active = 1
     if(!name ||!email  ) return Toast("please fill properly")
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( ! re.test(mobile)) return  Toast("mobile no  is not valid")

     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/add_customer',
        data:{
          name,email,mobile
        },

       })
       
       if(response.status===200){
        const data = response.data;
        setUserToken(data?.accessToken);
            setUserData(data?.Customer)
            window.localStorage.setItem('userToken', JSON.stringify(data?.accessToken));
            window.localStorage.setItem('userData', JSON.stringify(data?.Customer));
        Toast(data.message,response.status)
        navigate('/getestimate1')
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
      <h1>Fill Customers details </h1>
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
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label input-name">Mobile no</label>
    <input type="Number" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>

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