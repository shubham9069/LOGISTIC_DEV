import React, { useContext,lazy,Suspense } from 'react'
import { Routes,Route,Outlet, Navigate } from 'react-router-dom'
import './App.css'
import {GetEstimate1,GetEstimate2, OrderPlace, Rooms, Selectitem } from './estimatepages/Exportfiles'
import {Homepage,NavigationBar,Footer} from './homepage/Exportfile'
import { Signup,Signin, ForgetPassword, CheckEmail,MyOrders ,Otp,  Profile, Faq } from './pages/Exportfile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PresistLogin from './pages/PresistLogin'
import RequiredAuth from './pages/Requiredlogin'
import Requiredlogin from './pages/Requiredlogin'
import { AuthContext } from './AuthProvider'
import Fade from 'react-reveal/Fade';
import Service1  from './pages/servicepage/service1'
import FlatforRent from './pages/Flat/FlatforRent'
import ScrollToTop from './estimatepages/ScrollToTop'
import AboutUs from './pages/Aboutus/AboutUs'
import 'lightbox.js-react/dist/index.css'
import Help from './pages/Help&Support/Help'
import Loader from './Loader'
import TrackOrder from './estimatepages/TrackOrder/TrackOrder'
import Gallery from './pages/Gallery/Gallery'
import Contactus from './pages/contactus/Contactus'
import DigitalContact from './pages/digialcontact/DigitalContact'
import Blogs from './pages/Blogs/Blogs'
import BlogsDetails from './pages/Blogs/BlogsDetails'
import ComponyPortal from './pages/signin/ComponyPortalLogin'





const App = () => {
  const {userData,HomePage} = useContext(AuthContext)
  const {city } = HomePage
  return (
    <>
      <NavigationBar/>
      
      <ScrollToTop />
      <Routes>
      <Route  element={<PresistLogin/>}> 
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about-us' element={<AboutUs />}/>
      <Route path='/service/:service_id' element={<Service1 />}/>
   

      {city?.map((element) =>{

return    <Route path={`/packer-and-movers-in-${element?.slug}`} element={<FlatforRent id={element?.slug}/>}/>
})}
   
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/Contact-us' element={<Contactus/>}/>
      <Route path='/Contact-us/global' element={<DigitalContact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blog/:id' element={<BlogsDetails />}/>
      
      <Route path='/signin' element={<Fade top><Signin/></Fade>}/>
      <Route path='/company-portal' element={<Fade top><ComponyPortal/></Fade>}/>
      <Route path='/otp' element={<Fade top><Otp/></Fade>}/>
      <Route path='/signup' element={userData?.is_active==1?<Navigate to='/'/>:<Fade top><Signup/></Fade>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/track-order' element={<TrackOrder/>}/>
      
      <Route  element={<Requiredlogin/>}>
      
      <Route path='/profile' element={<Fade top><Profile/></Fade>}/>
      <Route path='/getestimate1' element={<Fade top><GetEstimate1/></Fade>}/>
      <Route path='/getestimate2' element={<Fade top><GetEstimate2/></Fade>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/selectitem/:room_id' element={<Selectitem/>}/>
      <Route path='/order-place' element={<OrderPlace/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
   
   
      
      </Route>
      </Route>
      </Routes>
    
      <Footer/>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </>
    
  )
}



export default App