import React from 'react'
import { Banner,About,Services,Uniqueselling,Growing,Slider,Ourcustomer,Contact, FlatRent } from './Exportfile'
import Fade from 'react-reveal/Fade';


const Homepage = () => {
  return (
    <>
   
    <Banner title={"Engage with the Largest Packer Community and Network"} />
    
    
    <About/>
    
    <Services/>
    
    <Uniqueselling/>
   
    <Growing/>
    
    <Slider/>
    
    <Ourcustomer/>
  
    <Contact/>
    
    <FlatRent title={"Flat for Rent"}/>
    
    </>
  )
}

export default Homepage