import React, { useMemo } from 'react'
import './trackorder.css'
import { useLocation } from 'react-router-dom'

const TrackOrder = () => {
  const location = useLocation()
 const data = location?.state?.data?.enquery
 document.title="Track-Order"
 const newdate =useMemo(()=>{
  var date = new Date(data?.created_at)
  var estimatedays =  new Date();
  estimatedays.setDate(date.getDate()+10)
  return estimatedays

 },[data])
  return (
    <>
    <div className="section-padding mx-auto" style={{maxWidth:2000 ,}}>
        <h2 className="section-heading"> Track your Package </h2>
        <p > expected delivery : <span style={{color:'grey'}}> {newdate.toDateString()}</span></p>
        <p style={{color:'grey'}}> Arrived by
         fedx </p>

        

    <div className="d-flex shipcontainer " style={{gridGap:40}} >
    <div style={{padding:20,}} className="shippinginfo">
        <h4 className='section-subheading'> Shipping Information</h4>
        
        <div style={{display:'flex'}}>
        <p style={{width:100}}>delivery </p>
        <p>fedx delivery available  </p>
        </div>

        <div style={{display:'flex'}}>
        <p style={{width:100}}>#Tracking  </p>
        <p>{data?.tracking_id}</p>
        </div>

        <div style={{display:'flex'}}>
        <p style={{width:100}}>Address </p>
        <p>{data?.to_floor} , {data?.to_location}</p>
        </div>

        <div style={{display:'flex'}}>
        <p style={{width:100}}>#order </p>
        <p>COD </p>
        </div>
    </div>
    <div className="tracking">

    {data?.tracking_status?.map((element, index) =>{

      return <div>
      <div className=''>
    <div style={{backgroundColor:'#088FD8',width:20,height:20,borderRadius:'50%'}}></div>
    <div className="tracking-line"></div>
 
    </div>
    <p> {element.status}<br/>{new Date(element?.created_at).toDateString()}</p>
    </div>
    })}
    


    <div>
    <div style={{backgroundColor:'#088FD8',width:20,height:20,borderRadius:'50%'}}></div>
    <p> complete  <br/>expected</p>
    </div>
    

        </div>
    <div style={{padding:20,}} className="shippinginfo">
        <h4 className='section-subheading'> Tracking History </h4>
        
        {data?.tracking_status?.map((elemenet)=>{

          return  <div style={{display:'flex'}}>
        <p style={{width:100}}>{new Date(elemenet?.created_at).toLocaleTimeString()} </p>
        <p>{elemenet?.status}<br/><span style={{fontSize:12}}> {new Date(elemenet?.created_at).toLocaleDateString()}</span> </p>
        
        </div>
        })}
       

        
    </div>
    </div>

    </div>

    </>
  )
}

export default TrackOrder