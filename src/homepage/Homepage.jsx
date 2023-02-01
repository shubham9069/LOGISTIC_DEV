import React from 'react'
import { Banner,About,Services,Uniqueselling,Growing,Slider,Ourcustomer,Contact, FlatRent } from './Exportfile'
import Fade from 'react-reveal/Fade';

const Homepage = () => {
  return (
    <>
    <Fade left>
    <Banner/>
    </Fade>
    <Fade right>
    <About/>
    </Fade>
    <Fade left>
    <Services/>
    </Fade>
    <Fade right>
    <Uniqueselling/>
    </Fade>
    <Fade left>
    <Growing/>
    </Fade>
    <Slider/>
    <Fade right>
    <Ourcustomer/>
    </Fade>
    <Fade bottom>
    <Contact/>
    </Fade>
    <FlatRent/>
    
    </>
  )
}

export default Homepage