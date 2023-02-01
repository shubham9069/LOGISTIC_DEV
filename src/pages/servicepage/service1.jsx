import React from 'react'
import Contact_Form from './contact-form/Contact_Form'
import DomesticReloaction from './domestic/DomesticReloaction'
import Shifting from './shifting/Shifting'
import Review from './review/Review'
import Question from './question/Question'
import {FlatRent, Slider} from '../../homepage/Exportfile'


const service1 = ({title}) => {
  return (
    <>
        <Contact_Form/>

        <DomesticReloaction title={"Budget Logistics and Packers Domestic Relocation"}/>
        <Shifting/>
        <Review/>
        <Slider/>
        <Question/>
        <FlatRent/>
    </>
  )
}

export default service1;
