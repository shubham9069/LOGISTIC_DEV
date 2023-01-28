import React from 'react'
import './uniqueselling.css'
import { customer,quality,premium,rating,team,rectangle,group } from '../assest'

const Uniqueselling = () => {
  return (
    <>
<div class="py-5 section-marginX section-padding">
    <div class="container">
        <div class="row unique-selling">

           <div class="col-sm-12 col-lg-6 width1000" style={{maxWidth: '500px' }}>
                <div class="usp-tiles  d-flex ">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={customer} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Personalized Service</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={quality} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Quality Assurance</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={premium} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Premium Service</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={rating} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Experience</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={team} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Worldwide Network</h5>
                    </div>
                </div>
           </div>

           <div class="col-sm-12 col-lg-6">
                <p class="section-subheading">OUR UNIQUE SELLING PROPOSITION</p>
                <h2 class="section-heading ">Your Busniess Success Built On A Powerful Customer Experience Platform</h2>
                <img src={rectangle} alt="" class="img-fluid"/>
           </div>
        </div>
    </div>
</div>

{/* {happy face } */}
<div className="happy-face section-margin section-padding">
<div className="container" >
<div style={{maxWidth:'300px'}}>

<p class="section-subheading">HAPPY FACES </p>
<h2 class="section-heading ">We Have Spread Some Happiness</h2>
</div>
</div>
</div>
<div className="group-banner"></div>
    </>
  )
}

export default Uniqueselling