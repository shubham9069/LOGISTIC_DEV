import React, { useContext } from 'react'
import { Routes,Route,Outlet, Navigate } from 'react-router-dom'
import './App.css'
import { GetEstimate1, GetEstimate2, OrderPlace, Rooms, Selectitem } from './estimatepages/Exportfiles'
import {Homepage,NavigationBar,Footer} from './homepage/Exportfile'
import { Signup,Signin, ForgetPassword, CheckEmail, Otp, MyOrders } from './pages/Exportfile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PresistLogin from './pages/PresistLogin'
import RequiredAuth from './pages/Requiredlogin'
import Requiredlogin from './pages/Requiredlogin'
import { AuthContext } from './AuthProvider'
import Fade from 'react-reveal/Fade';
import Service1  from './pages/servicepage/service1'



const App = () => {
  const {userData} = useContext(AuthContext)
  return (
    <>
      <NavigationBar/>
      <Routes>
      <Route  element={<PresistLogin/>}> 
      <Route path='/' element={<Homepage/>}/>
      <Route path='/service1' element={<Service1/>}/>
      
      <Route path='/signin' element={<Fade top><Signin/></Fade>}/>
      <Route path='/otp' element={<Fade top><Otp/></Fade>}/>
      <Route path='/signup' element={userData?.is_active==1?<Navigate to='/'/>:<Fade top><Signup/></Fade>}/>
      {/* <Route path='/forgetpassword' element={<ForgetPassword/>}/> */}
      {/* <Route path='/checkemail' element={<CheckEmail/>}/> */}
      <Route  element={<Requiredlogin/>}>
      
      <Route path='/getestimate1' element={<Fade top><GetEstimate1/></Fade>}/>
      <Route path='/getestimate2' element={<Fade top><GetEstimate2/></Fade>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/selectitem/:room_id' element={<Selectitem/>}/>
      <Route path='/orderplace' element={<OrderPlace/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      </Route>
      </Route>
      </Routes>
    
      <Footer/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
    
  )
}



export default App