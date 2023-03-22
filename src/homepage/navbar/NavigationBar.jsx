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
    <div className=''>
      <div className=' mx-auto topheader' style={{margin: "0 auto",justifyContent:"center",textAlign:"center"}}>
   
      <div> 
      <i className="bi bi-telephone-fill telicon" ></i>
      <a href="tel:8808700087" className='mobile' style={{}}>+91 88-087-000-87 </a>
      </div>
 
      </div>
    </div>
        <div className="main-div d-flex section-paddingX"   >
        <nav className="navbar navbar-expand-lg navigationbar "style={{padding :'1rem 0',width:'100%'}}  >
  <div className="container-fluid " style={{padding:0}}>
   <Link to="/" className="link-a d-flex"><img className="navbar-brand" src={logo}></img>
 
      </Link>
   
    <button className="navbar-toggler" type="button" onClick={()=>setNavbar(!Navbar)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={Navbar? "collapse navbar-collapse  show":"collapse navbar-collapse between-div "}>

    <div id="number"> 
      <i className="bi bi-telephone-fill telicon" style={{color:'#088FD8'}}></i>
      <a href="tel:05384637335" className='mobile' style={{color:'black'}}>+91 88-087-000-87 </a>
      </div>
      <ul className="navbar-nav  mb-2 mb-lg-0 " style={{gridGap: '15px'}}>
     
        
        <Dropdown className="nav-nav-item ">
      <Dropdown.Toggle className='nav-link' style={{backgroundColor:'white'}}>
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu >
     
        {dropdown?.map((element)=>{

          return <Link to={'/service1/'+element?.id} data-rr-ui-dropdown-item="" class="d-flex justify-content-between dropdown-item align-item-center drop-service" >
       
       <p >{element?.name}</p>
       <i class="bi bi-caret-right-fill" style={{fontSize:'12px'}}></i>
       
     </Link>
        })}
        
        
     
      </Dropdown.Menu>
    </Dropdown>
       
    <Dropdown className="nav-nav-item ">
      <Dropdown.Toggle className='nav-link' style={{backgroundColor:'white'}}>
        Company
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Link to={'/Faq'} data-rr-ui-dropdown-item="" class="d-flex justify-content-between dropdown-item align-item-center drop-service" >
       
       <p >Faq</p>
       <i class="bi bi-caret-right-fill" style={{fontSize:'12px'}}></i>
       
     </Link>
      <Link to='/Aboutus' data-rr-ui-dropdown-item="" class="d-flex justify-content-between dropdown-item align-item-center drop-service" >
       
       <p >About</p>
       <i class="bi bi-caret-right-fill" style={{fontSize:'12px'}}></i>
       
     </Link>
 
      </Dropdown.Menu>
    </Dropdown>
       
        <li className="nav-item ">
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
                      <Link to='/myorders' className='darkLink'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                      <i className="bi bi-list" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                        My Enquires</Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <Link to='/help' className='darkLink'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
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