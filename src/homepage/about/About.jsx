import React from 'react'
import './about.css'
import {Service,schedule} from '../assest/index'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
        <div className="about-section mt-5 section section-margin " style={{padding:'1rem'}}>
    <div className="container">
        <div className="row about">
            <div className="col-sm-12 col-lg-6 about-left">
                <p className="section-subheading">ABOUT</p>
                <h2 className="section-heading">
                Budget Logistics Packers is a professional packers & movers in India.
                 </h2>

                 <p align="justify" className="about-text py-3">Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting.</p>
            </div>
            <div className="col-sm-12 col-lg-6 about-right">
                 <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center ">
                        <Link to='/GetEstimate1' className="link-a about-tile my-3" >
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                            <i class="bi bi-calendar-check-fill" style={{fontSize:'2rem'}}></i>
                                <p >Free Estimate</p>
                            </div>
                            
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <Link to='/help' className="link-a about-tile my-3">
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                            <i class="bi bi-clock-fill" style={{fontSize:'2rem'}}></i>
                                <p>24/7 Services</p>
                            </div>
                           
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <Link to='/' className="link-a about-tile my-3" >
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                            <i class="bi bi-box-seam-fill" style={{fontSize:'2rem'}}></i>
                                <p>Damage Recover</p>
                            </div>
                        </Link>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default About