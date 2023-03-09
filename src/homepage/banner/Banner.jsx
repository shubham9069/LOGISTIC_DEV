import React, { useEffect } from 'react'
import './banner.css'
import  bgImg from "../assest//Rectangle\ 3875.png"

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
    </>
  )
}

export default Banner