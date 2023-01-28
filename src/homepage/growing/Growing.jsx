import React from 'react'
import './growing.css'


const Growing = () => {
  return (
    <>
        <div className="py-5 section-margin section-padding">
   <div className="container">
        <div className="row">
           <div className="col-sm-12 col-lg-8" style={{width: '76.666667%'}}>
                <p className="section-subheading">WE ARE GROWING</p>
                <h2 className="section-heading">Our company is going beyond its limits for past 5 years and we are reaching every possible door,s which are open for us.</h2>
           </div>
        </div>
       
        <div className="row py-5 justify-content-center" style={{gridGap:'25px'}}>
           <div className="col-lg-4 col-sm-12 center-div growing-box" >
               <div className="growing-tiles">
                   <h5 className="growing-tile-heading">1300k+</h5>
                   <span>User Order Online</span>
               </div>
           </div>
           <div className="col-lg-4 col-sm-12 center-div growing-box" style={{background: 'rgba(190, 226, 245, 0.47)'}} >
               <div className="growing-tiles" >
                   <h5 className="growing-tile-heading">1500k+</h5>
                   <span>Client &amp; Event More On The Way</span>
               </div>
           </div>
           <div className="col-lg-4 col-sm-12 center-div growing-box" >
               <div className="growing-tiles">
                   <h5 className="growing-tile-heading">350</h5>
                   <span>Partners are worldwide</span>
               </div>
           </div>
        </div>
   </div>

   <div className="py-5 padding4rem">
        <div className="container">
            <p className="section-subheading">Accreditation &amp; Associations</p>
            <h2 className="section-heading">Lorem ipsum dolor sit amet consectetur. In luctus ut donec.</h2>
        </div>

    </div>

    {/* {slider } */}
    
 {/* slider end  */}

   

</div>
    </>
  )
}

export default Growing