import React, { useContext, useEffect,useState } from 'react'
import './navigationbar.css'
import { logo } from '../assest/index'
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../../AuthProvider';
import Toast from '../../Toast';
import axios from '../../axios';
import { Logout } from '../../pages/Exportfile';


const NavigationBar = () => {
  const logout = Logout()
  const {userToken,userData} =useContext(AuthContext);
  const [isLoading,setIsLoading] = useState(false)
const [dropdown,setDropdown] = useState([])
const [Navbar,setNavbar] = useState(false)


  const getservicefun =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:'/get_services',
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setDropdown(data?.services)
            // Toast(data.message,response.status)
            
            
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


  useEffect(()=>{

    getservicefun();



  },[])
  return (
    <>
        <div className="main-div d-flex section-paddingX"   >
        <nav className="navbar navbar-expand-lg navigationbar "style={{padding :'1rem 0',width:'100%'}}  >
  <div className="container-fluid " style={{padding:0}}>
   <Link to="/" className="link-a"><img className="navbar-brand" src={logo}></img></Link>
    <button className="navbar-toggler" type="button" onClick={()=>setNavbar(!Navbar)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={Navbar? "collapse navbar-collapse  show":"collapse navbar-collapse "} id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item px-2">
          <Link to="/" className="nav-link link-a" aria-current="page" >Home</Link>
          <div className="nav-blue-bar"/>
        </li>
        {/* <li className="nav-item px-2">
          <Link to='/service1' className="nav-link link-a" >Service</Link>
        </li> */}
        
      
        <Dropdown className="nav-nav-item px-2">
      <Dropdown.Toggle className='nav-link' style={{backgroundColor:'white'}}>
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu >
     
        {dropdown?.map((element)=>{

          return <Link to={'/service1/'+element?.id} data-rr-ui-dropdown-item="" class="d-flex justify-content-between dropdown-item align-item-center drop-service" >
       
       <p >{element?.name}</p>
       <i class="bi bi-caret-right-fill"></i>
       
     </Link>
        })}
        
        
     
      </Dropdown.Menu>
    </Dropdown>
       
      
     
        <li className="nav-item px-2">
          <Link to="/Aboutus" className="nav-link" >About us </Link>
        </li>
        <li className="nav-item px-2">
          <Link to="/getestimate1" className="nav-link btn-design link-a" >Get Estimate</Link>
        </li>
       
        
      </ul>
    
    </div>
  </div>
  
</nav>
<div className='d-flex Buttonofnavbar dropdown  '>
       {userToken?<>
        <Dropdown size="lg">
        <Dropdown.Toggle className="nav-link dropdown-toggle " id="dropdown-basic" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'transparent',border:'none'}}>
                    <img src={userData?.avatar}  style={{
                      height: 20, width: 20, borderRadius: 30, marginRight: 5,

                    }}
                    onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src =
              "images/userdefault.png")
          )}
                    ></img>  
                  </Dropdown.Toggle>
    
      <Dropdown.Menu size="lg" style={{padding:'1rem',width:'200px'}}>
      <Dropdown.Item >
                      <div className='center-div'>
                        <img src={userData?.avatar} alt="pic" 
                        style={{
                          height: 50, width:50, borderRadius: 30, marginRight: 10,
                        }}
                        onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src =
              "images/userdefault.png")
          )}></img>
                      </div>
                      <div className='' style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: 18, fontWeight: '700', color: '#000' }}> {userData?.name}</span><br></br>
                        <Link to='/profile' className='darkLink grayLink'  style={{ padding: 0 }}>See your profile</Link>
                      </div>
                    </Dropdown.Item>
                    <li style={{ marginTop: 20 }}><hr className="dropdown-divider"></hr></li>


                       <Dropdown.Item >
                      <Link to='/myorders' className='darkLink' href="#/help" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                      <i className="bi bi-list" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                        My Enquires</Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <Link to='/help&support' className='darkLink' href="#/help" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-question-circle" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Help & Support</Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <div className='darkLink' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}
                      onClick={logout}
                        >
                        <i className="bi bi-box-arrow-right" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Logout</div>
                    </Dropdown.Item>        
      </Dropdown.Menu>
    </Dropdown> 
                
                 </>
                
                 :
                  null
                 }
       </div>
       </div>

  
    </>
  )
}

export default NavigationBar