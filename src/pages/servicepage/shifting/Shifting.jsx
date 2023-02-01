import React from 'react'
import './shifting.css'
import {group} from '../assest/exportfiles'

const Shifting = () => {
  return (
    <>

<div className="relocation-section mt-5 section section-margin section-padding " style={{}}>
    <div className="container">
        <div className="row relocation shifting1200px" >
           
            <div className="col-sm-12 col-lg-6 relocation-right">
                 <div className="row ">
                    <div className="col-12 d-grid justify-content-center align-items-center fourbox ">
                        <img src={group} ></img>
                        <img src={group}></img>
                        <img src={group}></img>
                        <img src={group}></img>
                    </div>
                    
                 </div>
            </div>
            <div className="col-sm-12 col-lg-6 relocation-left">
                {/* <p className="section-subheading">relocation</p> */}
                <h2 className="section-heading">
                Budget Logistics and Packers Complete Shifting Process
                 </h2>

                 <p align="justify" className="relocation-text py-3">Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting. <span style={{color:'#FF1E1E'}}>Read More.</span> </p>
            </div>
        </div>
    </div>
</div>


   <div className="py-5 section-margin section-padding">
   <div className="container">
        <div className="row">
           <div className="col-sm-12 col-lg-8" >
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <h2 className="section-heading">Budget Logistics and Packers Unique Selling Points</h2>
           </div>
           <div className="col-sm-12 col-lg-8" style={{width: '100%'}} >
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <p style={{margin:'2rem 0'}}> Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting. Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting .</p>
           </div>
           <div className="col-sm-12 col-lg-8 d-flex justify-content-center" style={{width: '100%',gridGap:'40px',flexWrap:'wrap'}} >
               <div className='number-div' >
                <div className="numbering">1</div>
                <p>Instant Customizable Quotes</p>
               </div>
               
               <div className='number-div' >
                <div className="numbering">2</div>
                <p>Dedicated Move Manager And Professional Teams</p>
               </div>
               <div className='number-div' >
                <div className="numbering">3</div>
                <p>Damage & Transit Care Packages</p>
               </div>
               <div className='number-div' >
                <div className="numbering">4</div>
                <p>Pre-Move and Post-move Services</p>
               </div>
               <div className='number-div' >
                <div className="numbering">5</div>
                <p>Highest Quality Packing Materials</p>
               </div>

           </div>
        </div>
       
        
   </div>

</div>


    </>
  )
}

export default Shifting