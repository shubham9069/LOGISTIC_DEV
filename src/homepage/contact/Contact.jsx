import React, { useState } from 'react'
import './contact.css'
import {hours,estimate} from '../assest/index'

import axios from '../../axios'
import validator from 'validator'
import Toast from '../../Toast'
import Loader from '../../Loader'


const Contact = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [contact,setContact] = useState({
        name:"",
        mobile:"",
        email:"",
        subject:"",
        message:""
    })

    const handleChange = (e) => {

        setContact({...contact,[e.target.name]:e.target.value})
    }


    const Contact_form = async(e)=>{
        const {name, mobile, email, subject, message} = contact
        e.preventDefault()
      
         if( !email || !message || !mobile ) return Toast("please fill properly")
         if( !validator.isEmail(email)) return Toast("email is not valid")
         if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
       
    
         try{
          setIsLoading(true)
          const response= await axios({
            method: "post",
           url:'/add_contact',
            data:{
              name,mobile,email,subject,message
            },
    
           })
           
           if(response.status===200){
            const data = response.data;
           
            Toast(data.message,response.status)
            
           }
         }
         catch(err){
          const error = err.response.data
          Toast(error.message)
    
         }
         finally{
          setIsLoading(false)
         }
      }
  return (
    <>
    {isLoading &&(<Loader />)}
     <div className="contact-section section-padding" style={{color:'white'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <h5 className=' feelfree' >Feel free to contact us </h5>

                <div className="mt-5">
                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-icons  me-3">
                            <img src={estimate} alt=""/>
                        </div>
                        <div className="mt-auto">
                            <span  className="text-white heading">Free Estimate</span>
                            <p Style="font-size:12px;" className="text-white contactleft-text">get Your Free Estimate</p>
                        </div>
                       
                    </div>

                    <div className="d-flex  align-items-center mb-3">
                        <div className="contact-icons  me-3">
                            <img src={hours} alt=""/>
                        </div>
                        <div className="mt-auto">
                            <span  className="text-white heading">24/7 Services</span>
                            <p Style="font-size:12px;" className="text-white contactleft-text">We Are Available 24/7 . Call us</p>
                        </div>
                       
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-white contactleft-text">

                    You can reach us by phone at +91 - 9311693666 or by email at info@budgetlogisticspackers.com . Alternatively, you can fill out the contact form below and we will get back to you as soon as possible. 
                    </p>
                </div>

            
            </div>
            <div className="col-lg-6 col-12">
                <div className="contact-form">
                    <h5 className="text-center text-uppercase" style={{fontWeight:700}}>Contact With Us</h5>
                    <div className="row mt-5">
                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" className="form-control" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="mobile">Number</label>
                                <input type="number" name="mobile" id="mobile" className="form-control"  onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" className="form-control"  onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" name="subject" id="subject" className="form-control"  onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <div className="form-group">
                                <label for="message">Message</label>
                               <textarea name="message" id="message" cols="10" className="form-control"  onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="d-block btn mt-5 submit-btn w-100 "  onClick={Contact_form}>Send Message</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Contact