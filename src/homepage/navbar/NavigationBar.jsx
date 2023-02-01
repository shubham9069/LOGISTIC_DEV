import React from 'react'
import './navigationbar.css'
import { logo } from '../assest/index'
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const NavigationBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navigationbar section-marginX section-padding"  >
  <div className="container-fluid ">
   <Link to="/" className="link-a"><img className="navbar-brand" src={logo}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item px-2">
          <Link to="/" className="nav-link link-a" aria-current="page" >Home</Link>
          <div className="nav-blue-bar"/>
        </li>
        <li className="nav-item px-2">
          <Link to='/service1' className="nav-link link-a" >Service</Link>
        </li>
        
      {/* li item 
        <Dropdown className="nav-nav-item px-2">
      <Dropdown.Toggle className='nav-link' style={{backgroundColor:'white'}}>
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu style={{padding:0}}>
      <Link to='/service1' data-rr-ui-dropdown-item="" class="d-flex justify-content-between dropdown-item align-item-center" >
       
          <p >Domestic Packers and Movers</p>
          <i class="bi bi-caret-right-fill"></i>
          
        </Link>
        <Dropdown.Item href="#/action-1" className="d-flex justify-content-between">
          <p>House shifting </p>
          <i class="bi bi-caret-right-fill"></i>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className="d-flex justify-content-between">
          <p>vehical shifting </p>
          <i class="bi bi-caret-right-fill"></i>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className="d-flex justify-content-between">
          <p>Storge Facility </p>
          <i class="bi bi-caret-right-fill"></i>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className="d-flex justify-content-between">
          <p>International location </p>
          <i class="bi bi-caret-right-fill"></i>
        </Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>
       {/*
       */}
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