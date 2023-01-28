import React from 'react'
import './forgetpassword.css'
import {Link} from 'react-router-dom'

const ForgetPassword = () => {
  return (
   <>
<div className="forgetpassword ">
    <div className='container '>
      <h1>Forget Password</h1>
      <p className='lighptgrey-p'>Please enter the registered email address to reset your password</p>
      <form>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label input-name">Email address</label>
    <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text lighptgrey-p">We'll never share your email with anyone else.</div>
  </div>
  
  <button type="submit" className="btn btn-primary form-btn">Request Reset Link</button>
  <Link to='/signin' className="center-div forgetpassword-span link-a">Back To Login </Link>
</form>

   
    </div>
   </div>
   </>
  )
}

export default ForgetPassword