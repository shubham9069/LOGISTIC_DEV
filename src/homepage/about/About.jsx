import React from 'react'
import './about.css'
import {Service,schedule} from '../assest/index'

const About = () => {
  return (
    <>
        <div className="about-section mt-5 section section-margin " style={{padding:'2rem'}}>
    <div className="container">
        <div className="row about">
            <div className="col-sm-12 col-lg-6 about-left">
                <p className="section-subheading">ABOUT</p>
                <h2 className="section-heading">
                 Your Busniess Success Built On A Powerful Customer Experience Platform
                 </h2>

                 <p align="justify" className="about-text py-3">Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting. <span style={{color:'#FF1E1E'}}>Read More.</span> </p>
            </div>
            <div className="col-sm-12 col-lg-6 about-right">
                 <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center ">
                        <div className="about-tile my-3" Style={"background: #088FD8;"}>
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                                <img src={schedule} alt=""/>
                                <p className="text-white">Free Estimate</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="about-tile my-3">
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                                <img src={Service} alt=""/>
                                <p>24/7 Services</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="about-tile my-3">
                            <div className='d-flex justify-content-center align-items-center flex-column about-img'>
                                <img src={Service} alt=""/>
                                <p>24/7 Services</p>
                            </div>
                        </div>
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