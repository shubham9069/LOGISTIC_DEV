import React, { useEffect, useRef, useState } from 'react'
import './growing.css'


const Growing = () => {
   const growing = useRef();
   const [rerun,setrerun] = useState(false)
   const [scrollPosition, setScrollPosition] = useState(0);
const number =(e)=>{

    if(rerun){
        
        return 
    } 
 
    setrerun(true)
const myNum = document.querySelectorAll('.growing-h1')

let speed = 1;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count)
    
    let newSpeed = Math.floor(target_count / speed)
    
    const updateNumber = () => {
        init_count +=  speed;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 50)
        }else if(myCount.id=="k"){
            myCount.innerText=myCount.innerText+"k+"
        }
        
    }
    
    updateNumber();
})
  
}

const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if(position> growing.current.offsetTop-150){
        number()
    }
   
};
useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
        passive: true
    });
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [scrollPosition]);



  return (
    <>
        
   <div className="container section-marginX section-padding">
        <div className="row">
           <div className="col-sm-12 col-lg-8" style={{width: '76.666667%'}}>
                <p className="section-subheading">WE ARE GROWING</p>
                <h2 className="section-heading">Our company is going beyond its limits for past 12 years and we are reaching every possible door,s which are open for us.</h2>
           </div>
        </div>
        
      
   </div>
   <div className=" growing-container" ref={growing}>
    <div>
        <h1 data-count="32" className="growing-h1" style={{fontSize:60,fontWeight:700}}>0</h1>
        <p>Branches </p>
    </div>
    <div>
        <h1 data-count="12" className="growing-h1" id="k"  style={{fontSize:60,fontWeight:700}} >0</h1>
        <p>Move annually</p>
    </div>
    <div>
        <h1 data-count="150" className="growing-h1"  style={{fontSize:60,fontWeight:700}}>120</h1>
        <p>Vehicle</p>
    </div>
    <div>
        <h1 data-count="25" className="growing-h1" id="k"  style={{fontSize:60,fontWeight:700}}>0 <span></span></h1>
        <p>Happy Customers </p>
    </div>
   </div> 

   <div className="py-5 padding4rem">
        <div className="container">
            <p className="section-subheading">Accreditation &amp; Associations</p>
            <h2 className="section-heading">Brands we have served for</h2>
        </div>

    </div>

    {/* {slider } */}
    
 {/* slider end  */}

   


    </>
  )
}

export default Growing