import React from 'react'
import './service.css'
import { warehouse,train,exchange,canvas,delivery,briefcase } from '../assest/index'



const Services = () => {
  return (
    <>
<div className="about-section py-5 section-margin " style={{padding:'1rem'}}>
    <div className="container service ">
        <div className="">
            <div className="col-sm-12 col-lg-7">
                <p className="section-subheading">OUR SERVICES</p>
                <h2 className="section-heading">Get quality service from high rated staff with peace of mind from Budget Logistics</h2>
            </div>
        </div>
        
        <div className="  parent-of-card" >
            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={train} alt="swws" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Intercity Moving</p>
                   <p className="service-tile-text">We move source to destination very effcient time period with very without any damage</p>
                </div>
            </div>
            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={delivery} alt="" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Car/Bike Transporation</p>
                   <p className="service-tile-text">We are well equipped with our team of professional staff that use best equipments for packing, loading, unloading materials.</p>
                </div>
            </div>
            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={exchange} alt="" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Relocation Services</p>
                   <p className="service-tile-text">Our Professional and highly trained team members will makes your shifting very smooth and without any damage.</p>
                </div>
            </div>

            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={briefcase} alt="" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Office relocation</p>
                   <p className="service-tile-text">We move source to destination very effcient time period with very without any damage</p>
                </div>
            </div>
            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={warehouse} alt="" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Warehousing &amp; Storage</p>
                   <p className="service-tile-text">We are well equipped with our team of professional staff that use best equipments for packing, loading, unloading materials.</p>
                </div>
            </div>
            <div className="" >
                <div className="text-center service-card">
                    <div className="service-tile">
                       <img src={canvas} alt="" className="img-fluid"/>
                       
                    </div>
                   <p className="service-tile-heading">Corporate Shifting</p>
                   <p className="service-tile-text"> Quality Service Guarantee. Flexible Pricing. Packers & Movers Services. Competitive Quote. We provide Best and reliable Packing and moving service in Gurgaon at lowest cost.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className=" get-qoutes section-padding">

        
          
                
                <h2 className="text-white">Need a Free Moving <span className="highlight">Estimate?</span></h2>
           

                
                <a href="#" className="get-quote-btn text-uppercase quote-btn border-0">GET QUOTE FREE</a>
            
</div>
    </>
  )
}

export default Services