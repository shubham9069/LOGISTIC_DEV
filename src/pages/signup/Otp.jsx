import React,{useState,useContext} from 'react'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import Toast from '../../Toast'
import axios from '../../axios'
import { AuthContext } from '../../AuthProvider'

const Otp = () => {
  const navigate = useNavigate()
  const {setUserToken,setUserData} = useContext(AuthContext)
    const [isLoading,setIsLoading] = useState()
    const[input1,setInput1]  = useState("")
    const[input2,setInput2]  = useState("")
    const[input3,setInput3]  = useState("")
    const[input4,setInput4]  = useState("")
    const location = useLocation();
    const mobile = location?.state?.mobile
    const from = location?.state?.from
    console.log(from)

const checkotp=async(e)=>{
  console.log("hello")
      e.preventDefault()
      
      if(!input1 || !input2 || !input3 || !input4) return Toast('plz filled otp');

      const otp = input1+input2+input3+input4
      try{
        setIsLoading(true)
          const response= await axios({
            method: "post",
           url:'/verify-otp',
            data:{
              mobile,otp
            },
           })
           
           if(response.status===200){
            const data = response.data;
            Toast(data.msg,response.status);
            
            if(data?.Customer?.is_active==0){
              navigate('/signup' ,{state:{mobile}})
            }else{
            setUserToken(data?.accessToken);
            setUserData(data?.Customer)
            window.localStorage.setItem('userToken', JSON.stringify(data?.accessToken));
            window.localStorage.setItem('userData', JSON.stringify(data?.Customer));
              navigate(from || '/')
            }
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

  const resendotp=async(e)=>{
      e.preventDefault()
      try{
        setIsLoading(true)
          const response= await axios({
            method: "post",
           url:'/resend-otp',
            data:{
              mobile
            }
           })
           
           if(response.status===200){
            const data = response.data
            Toast(data.msg,response.status)
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


    var mailenvlope={
        width:'100px',
        height:'100px',
      
        top:'0',
        background: 'linear-gradient(180deg, #315CB3 0%, #072258 100%)',
        borderRadius:'50%',
        margin:'0 auto'


    }


    function otphandler(e){
      


      var element = document.getElementsByClassName('form-control')
      // console.log(element)
      

      // keycode 8 for backspace 
      if(e.keyCode == 8 && e.target.value.length ==0 &&  e.target.previousElementSibling !==null){
      e.target.previousElementSibling.focus()
     

      }if( e.target.value.length >=e.target.maxLength && e.target.nextElementSibling !==null){
        e.target.nextElementSibling.focus()
      }
      

    }
  return (
    <>
        <div className="forgetpassword ">
    <div className='container center-div flex-column' >
      <h1>Please validate the T-PIN sent to  your mobile number</h1>
      <p className='lighptgrey-p'>{mobile}</p>
     
      <form>
      <div className="mb-3 d-flex  justify-content-center"style={{gridGap:'20px'}}>
    
    <input type="text" className="form-control form-input" id="otp1" onKeyUp={otphandler} aria-describedby="name" maxLength={1} style={{maxWidth:'70px'}} value={input1} onChange={(e)=>{setInput1(e.target.value)}} onClick/>
    
    <input type="text" className="form-control form-input" id="otp2" onKeyUp={otphandler} aria-describedby="name" maxLength={1} style={{maxWidth:'70px'}} value={input2} onChange={(e)=>{setInput2(e.target.value)}}/>
    
    <input type="text" className="form-control form-input" id="otp3" onKeyUp={otphandler} aria-describedby="name" maxLength={1} style={{maxWidth:'70px'}}  value={input3} onChange={(e)=>{setInput3(e.target.value)}}/>
    
    <input type="text" className="form-control form-input" id="otp4" onKeyUp={otphandler} aria-describedby="name" maxLength={1} style={{maxWidth:'70px'}}  value={input4} onChange={(e)=>{setInput4(e.target.value)}}/>
 
  </div>
  
      <p className='lighptgrey-p' style={{marginTop:'2rem',marginBottom:'0' }}>If you do not reveive the T-PIN in the next 5 seconds, you will automatically
receive a IVR call to convey the PIN.</p>
  <button  className="btn btn-primary form-btn" style={{marginTop:'2rem'}} onClick={checkotp}>procced</button>
 <p className="signup-span center-div" onClick={resendotp} >Resend Otp</p>
</form>

   
    </div>
   </div>
    </>
  )
}

export default Otp