import React, { useState } from 'react'
import './contact.css'
import {hours,estimate} from '../assest/index'

const Contact = () => {
    const [pack,setpack]= useState([1,2,3,4,5,6,7,8,9,0])
  return (
    <>
     <div className="contact-section section-padding" style={{background:'#088FD8', color:'white'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <h2 className=' feelfree' >Feel free to contact us to learn more.</h2>

                <div className="mt-5">
                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-icons  me-3">
                            <img src={estimate} alt=""/>
                        </div>
                        <div className="mt-auto">
                            <span  className="text-white heading">Free Estimate</span>
                            <p Style="font-size:12px;" className="text-white contactleft-text">Lorem ipsum is a dummy text</p>
                        </div>
                       
                    </div>

                    <div className="d-flex  align-items-center mb-3">
                        <div className="contact-icons  me-3">
                            <img src={hours} alt=""/>
                        </div>
                        <div className="mt-auto">
                            <span  className="text-white heading">24/7 Services</span>
                            <p Style="font-size:12px;" className="text-white contactleft-text">Lorem ipsum is a dummy text</p>
                        </div>
                       
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-white contactleft-text">
                    �We are always ready to help you with any designs issues
We provide the only quality designs you need at reasonable
rates. You can safely make a deal with us with us and boost
your busniess�
                    </p>
                </div>

                <div className="mt-5 d-flex">
                    <img src= 'https://instagram.fdel10-1.fna.fbcdn.net/v/t51.2885-19/280800452_528342632072866_3685802488877854547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=5gwRmKICISsAX8lpUWn&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCkw3E4arDWsGZ7d398nWqu0L4oNzToy1tRWrcaf6eoBw&oe=63CF6C06&_nc_sid=8fd12b' alt="" className="founder-icon me-3"/>
                    <div className="mt-auto">
                        <span  className="text-white heading">Anis Morsalin</span>
                        <p Style="font-size:12px;" className="text-white contactleft-text">Director @Digitalbus</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="contact-form">
                    <h3 className="text-center text-uppercase">Contact With Us</h3>
                    <div className="row mt-5">
                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="phone">Number</label>
                                <input type="text" name="phone" id="phone" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" name="subject" id="subject" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <div className="form-group">
                                <label for="message">message</label>
                               <textarea name="message" id="message" cols="10" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="d-block btn mt-5 submit-btn w-100 " type="submit">Send Message</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="section-padding flat-rent">
<div className="container flat-rent-a">
    <a>Flat For Rent In Banglore </a>
    <a>Flat For Rent In Banglore </a>
    <a>Flat For Rent In Banglore </a>
    <a>Flat For Rent In Banglore </a>
</div>



</div>
<div className="packer section-padding">
{pack.map((element=>{
    return <div className="container packer-and-mover" >
    <a>packers And Mover In Banglore </a>
    <a>Flat For Rent In Banglore </a>
    <a>Flat For Rent In Banglore </a>
    <a>Flat For Rent In Banglore </a>
</div>
}))}


</div>
    </>
  )
}

export default Contact