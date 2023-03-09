import React from 'react'
import './shifting.css'
import {group} from '../assest/exportfiles'

const Shifting = ({title,text,list}) => {
  return (
    <>



   <div className="py-5 section-margin section-padding">
   <div className="container">
        <div className="row">
           <div className="col-sm-12 col-lg-8" >
                {/* <p className="section-subheatitleding">WE ARE GROWING</p> */}
                <h2 className="section-heading">{title}</h2>
           </div>
           <div className="col-sm-12 col-lg-8" style={{width: '100%'}} >
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <p style={{margin:'2rem 0'}} className="relocation-text">{text}</p>
           </div>
           <div className="col-sm-12 col-lg-8 d-flex justify-content-center" style={{width: '100%',gridGap:'40px',flexWrap:'wrap'}} >
           {list?.map((element,index)=>{


            return  <div className='number-div' >
                <div className="numbering">{index+1}</div>
                <p>{element?.heading}</p>
               </div>
           })}
              
            
               

           </div>
        </div>
       
        
   </div>

</div>


    </>
  )
}

export default Shifting