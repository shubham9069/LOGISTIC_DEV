import React from 'react'
import './review.css'
import {star} from '../assest/exportfiles'


const Review = ({reviewArr}) => {

    
const getstar =(rating) => {
    var total = 5
    var star =[]
    for(var i=0; i<rating;i++){
        star.push(<i class="bi bi-star-fill"></i>)
    }
    for(var i=0; i<total-rating;i++){
        star.push(<i class="bi bi-star"></i>)
    }
    return star
}
  return (
    <>
        <div className="py-5 section-margin section-padding">
   <div className="">
        <div className="row center-div" style={{flexDirection:'column'}}>
           <div className="col-sm-12 col-lg-8 center-div" style={{marginBottom:'2rem'}}>
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <h2 className="section-heading">Budget Logistics and Packers Unique Selling Points</h2>
           </div>
          
           <div className="col-sm-12 col-lg-8 d-flex justify-content-center" style={{width: '100%',gridGap:'30px',flexWrap:'wrap'}} >

           {reviewArr?.map((element, i) =>{

                return <div className="review-box ">    
                <p>{element?.name} </p>
                <div>
                <h6>{element?.designation}</h6>
                <p>{element?.quot}</p>
                <div className='review-star'>
                    {getstar(element?.rating)}
                </div>
                </div>
               </div>

           })}
               
              
              

           </div>
        </div>
       
        
   </div>

</div>

<div className="py-5 section-margin section-padding">
   <div className="container">
        <div className="row center-div" style={{flexDirection:'column'}}>
           <div className="col-sm-12 col-lg-8 center-div" style={{}}>
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <h2 className="section-heading">We are trusted by many </h2>
           </div>
           <div className="col-sm-12 col-lg-8" style={{width: '100%'}} >
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <p style={{margin:'2rem 0',textAlign:'center'}}> Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting. Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting .</p>
           </div>
           </div>
</div>
</div>

    </>
  )
}

export default Review