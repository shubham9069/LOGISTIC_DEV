import React from 'react'
import './forgetpassword.css'
import { Link } from 'react-router-dom'

const CheckEmail = () => {

    var mailenvlope={
        width:'100px',
        height:'100px',
      
        top:'0',
        background: 'linear-gradient(180deg, #315CB3 0%, #072258 100%)',
        borderRadius:'50%',
        margin:'0 auto'


    }
  return (
    <>
        <div className="forgetpassword ">
    <div className='container center-div flex-column' >
      <h1>Check Email</h1>
      <div  style={mailenvlope}>

      <i className="bi bi-envelope-fill " style={{color:'white' ,fontSize: '4rem', paddingLeft:'1.1rem'}}></i>
      </div>
      <p className='lighptgrey-p' style={{marginTop:'2rem',marginBottom:'0' }}>We have sent a password recover instructions to register email.</p>
      <form>

  
  
  <button type="submit" className="btn btn-primary form-btn" style={{marginTop:'2rem'}} >Open Email</button>
  <div className='center-div flex-column' >
  <Link to='/signin' className=" forgetpassword-span link-a">Skip, i’’ll confirm later</Link>
  <p to='/signin' className="link-a lighptgrey-p " style={{maxWidth:'370px' ,textAlign:'center',marginTop:'1.2rem'}}>Did not receive the email? Check your spam folder,
or <Link to='/forgetpassword' className=" forgetpassword-span link-a">Try Another Email Address</Link></p>
</div>
</form>

   
    </div>
   </div>
    </>
  )
}

export default CheckEmail