import React from 'react'
import './review.css'
import {star} from '../assest/exportfiles'


const Review = ({reviewArr}) => {

    
const getstar =(rating) => {
    var total = 5
    var star =[]
    for(var i=0; i<rating;i++){
        star.push(<div 
            style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
            background:"#fed001",
            height:20,
            width:20
            
            }}
           >

            </div>)
    }
    for(var i=0; i<total-rating;i++){
        star.push(<div 
            style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
            background:'#D9D1D1',
            height:20,
            width:20
            
            }}
           >

            </div>)
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
                <p>{element?.customer_name} </p>
                <div>
                <h6>{element?.designation}</h6>
                <p>{element?.review}</p>
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
                <p 
                style={{margin:'2rem 0',textAlign:'center',fontweight: 400,
    fontSize: 16,
    lineHeight: '155.02%',
    color: '#727272'}}> Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting relatively easy for you. We make sure that you have an unforgettable experience by minimizing all the worries related to goods shifting. Budget Logistic and Packers is a professional and reputed relocation service provider based in Bangalore. Our main objective is to make the process of goods shifting .</p>
           </div>
           </div>
</div>
</div>

    </>
  )
}

export default Review