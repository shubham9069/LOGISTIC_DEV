import React from 'react'
import './ourcustomer.css'


const Ourcustomer = () => {
  return (
    <>
         <div className="py-5 section-margin section-padding">
       
       <div className="container">
           <p className="section-subheading">OUR CUSTOMERS LOVES US</p>
           <h2 className="section-heading">Our company is going beyond its limits for past 5 years and we are reaching every possible door,s which are open for us.</h2>

           <div className="row py-5">
               <div className="col-sm-12 col-lg-8" Style={'flex:1'}>

               <video src="https://shubham9069.github.io/advertisment/sizzle-preview-1.mp4" 
                muted
                 autoPlay
                loop  id="myVideo"/>
           
               </div>
               <div className="col-sm-12 col-lg-4 width800 " Style={'flex:0.7'}>
                   <div className="testimonial-container h-100">
                       <div className="row" Style="height:80%;">
                           <div className="col-6 mt-auto">
                               <img src="https://lh3.googleusercontent.com/a/AEdFTp4GSK5Eamn44VVjLbQCHMOahseAT32sGBMnbaLz=s432-p-rw-no" alt="" Style="height: 70px;width: 70px; border-radius: 50%;"/>
                           </div>
                           <div className="col-6" Style="margin-top:auto;">
                               <div className="d-flex" Style="justify-content:flex-end; ">
                               <i class="bi bi-star-fill"></i>
                               <i class="bi bi-star-fill"></i>
                               <i class="bi bi-star-fill"></i>
                               <i class="bi bi-star-fill"></i>
                               <i class="bi bi-star-fill"></i>
                               </div>
                               
                           </div>
                           <div className="col-12">
                               <p align="justify" className="py-3 our-customer-right-text">I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.</p>
                           </div>
                       </div>
                       
                       <div className="d-flex" Style="flex-direction:column; justify-content:flex-end; height:20%;">
                           <b className="pt-5" Style={'font-weight: 800;font-size: 14.4354px;line-height: 15px; margin-bottom:0.5rem'}>Sophia Anderson</b>
                           <span Style="font-weight: 400;font-size: 10px;line-height: 10px;">Internal Implementation Officer</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       
   </div>
    </>
  )
}

export default Ourcustomer