import React,{useContext} from 'react'
import './orderplace.css'
import {orderplace,sofa} from '../assest/Exportimage'
import {AuthContext} from '../../AuthProvider'
import { Fade } from 'react-reveal'
import { Link, useLocation } from 'react-router-dom'


const OrderPlace = () => {

    const {userData,userToken} = useContext(AuthContext)
    const location = useLocation()
    const order_data = location?.state?.enquiry_data;
    console.log(order_data)
  return (
    <>
    <div className="order-top container center-div " >
    <Fade top>
        <div className='order-image'>
    <img  src={orderplace}/>
        </div>
        <div className='order-text text-center '>
        <h2>Thanku {order_data?.user?.name} !</h2>
        <div style={{maxWidth:'700px'}}>
        <p className='lighptgrey-p'>The information you provided has been sent to our top secret wise quote calculating monks. We Will get you perfect tailor made quote in a day.</p>
        <p className='lighptgrey-p'><strong>Did you know</strong> you could reduce the price by choosing a weekday?<br/>
        You will be able lto see price trends near to the date of your move and choose accordingly.
        </p>
        <p className='lighptgrey-p' ><strong>Did you know</strong> you Can customise your package by telling what items you want packed?<br/>
Simply check the package option and let us know, or let us recommed the most popular option!</p>

        </div>

        </div>
        <div className='order-button'>
    <Link  to='/myorders' type="button" className="link-a myorder-btn" >My order</Link>
        </div>
        </Fade>
        <div className='bottom-box section-margin'>
           
            <div >
                <strong>#Enquiry Id</strong>
                <p>{order_data?.id}</p>
                
            </div>
            <div>
            <strong>Move Type</strong>
                <p>{order_data?.from_bhk}</p>
                <p>{order_data?.to_bhk}</p>
            </div>
            <div>
            <strong>User Information</strong>
                <p>{order_data?.user?.name}</p>
                <p>{order_data?.user?.email}</p>
                <p>{order_data?.user?.mobile}</p>
            </div>
            <div>
            <strong>From</strong>
                <p>{order_data?.from_floor} Floor</p>
                <p>{order_data?.from_location}</p>
            </div>
            <div>
            <strong>To</strong>
                <p>{order_data?.to_floor} Floor</p>
                <p>{order_data?.to_location} </p>
            </div>
            <div>
            <strong>Date & TimeSlot</strong>
                <p>{new Date(order_data?.created_at).toUTCString()}</p>
                <p>{new Date(order_data?.updated_at).toUTCString()}</p>
            </div>
        </div>
        <div>
            <p style={{fontWeight:600,fontSize:'16px'}}>Your Selected Items</p>
        </div>
    <div className='itemlist-container'>
    {Object.keys(order_data?.products || {}).map((element)=>{


        return  <div className='item-list-box '>
       <div>
        <img src={sofa}></img>
       </div>
       <div>
        <p style={{margin:'3px'}}>{element}</p>
        <div style={{display: 'flex',gridGap:'10px'}}>
        {order_data?.products[element]?.map((att)=>{


            return <p style={{fontSize:'12px'}}>{att?.attribute_name}  :  {att?.attribute_value}</p>
        })}
        </div>
        
        </div>
    </div>
    })}
    <Fade bottom>
   
  
   
    </Fade>
        </div>
    </div>


    </>
  )
}

export default OrderPlace