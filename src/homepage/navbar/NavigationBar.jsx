import React from 'react'
import './navigationbar.css'
import { logo } from '../assest/index'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navigationbar section-marginX section-padding" >
  <div className="container-fluid ">
   <Link to="/" className="link-a"><img className="navbar-brand" src={logo}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item px-2">
          <Link to='/getestimate1' className="nav-link" >Customer Portal</Link>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#">Track</a>
        </li>
        <li className="nav-item px-2">
          <Link to='/signin' className="nav-link btn-design link-a" >Get Estimate</Link>
        </li>
       
        
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default NavigationBar