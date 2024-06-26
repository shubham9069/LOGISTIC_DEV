import React from 'react'
import './domesticrelocation.css'
import { relocation } from '../assest/exportfiles'



const DomesticReloaction = ({title,img,flexdirection,text}) => {
  return (
    <>
    <div className="relocation-section mt-5 section section-margin section-padding " style={{}}>
    <div className="container">
        <div className="row relocation center-div" style={{flexDirection:flexdirection}}>
            <div className="col-sm-12 col-lg-6 relocation-left">
                {/* <p className="section-subheading">relocation</p> */}
                <h2 className="section-heading">
                 {title}
                 </h2>

                 <p align="justify" className="relocation-text py-3">{text} </p>
            </div>
            <div className="col-sm-12 col-lg-6 relocation-right">
                 <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center ">
                        <img src={img} style={{width:'100%', height:'100%'}}></img>
                    </div>
                    
                 </div>
            </div>
        </div>
    </div>
</div>






    </>
  )
}

export default DomesticReloaction