import React from 'react'
import { Banner,About,Services,Uniqueselling,Growing,Slider,Ourcustomer,Contact, FlatRent } from './Exportfile'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';


const Homepage = () => {

  return (
    <>
    <Helmet>
                
                <title>Budget Logistics and Packers</title>
                <meta
      name="description"
      content="Budget Logistics and Packers is a leading packers and movers company in India. We provide relocation solutions in India and Globally as well"
    />
    <meta name="keywords" content="packers and movers, relocation solution, packers and movers near me, office relocation , home relocation , warehousing storage , international relocation "></meta>
            </Helmet>
    <Banner title={"Engage with the Largest Packer Community and Network"} />
    
    
    <About/>
    
    <Services/>
    
    <Uniqueselling/>
   
    <Growing/>
    
    <Slider/>
    
    <Ourcustomer/>
  
    <Contact/>
    
    <FlatRent title={"Packer And Movers"}/>
    
    </>
  )
}

export default Homepage