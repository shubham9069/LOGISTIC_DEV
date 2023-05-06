import React, { useEffect } from 'react'
import './banner.css'
import  bgImg from "../assest//Rectangle\ 3875.png"
import { Link } from 'react-router-dom'

const Banner = ({title,banner}) => {

console.log(banner)
  return (
    <>
  <div className="banner section-padding section-marginX">
    <div className="banner-dark" style={{backgroundImage:`url(${banner || bgImg})`}}/>
    <div className="banner-content">
      <p>Welcome To <span> Budget Logistisc Packers</span></p>
      <h1>{title}</h1>
    </div>

    </div>
    <div className=" get-qoutes section-padding" style={{marginTop:'2rem'}}>

        
          
                
                <h2 className="">Need a Free Moving <span className="highlight">Estimate?</span></h2>
           

                
                <Link to='/getestimate1' className="get-quote-btn text-uppercase quote-btn border-0">GET QUOTE FREE</Link>
            
</div>
    </>
  )
}

export default Banner