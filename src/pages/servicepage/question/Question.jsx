import React,{useState} from 'react'
import { Fade } from 'react-reveal'
import './question.css'

function Question() {
  const [show,setShow] = useState()

  const handlestate=(e)=>{
     const name = e.target.name;
     
  }
  return (
    <>
  <div className="py-5 section-margin ">
   <div className="container">
        <div className="row center-div" style={{flexDirection:'column'}}>
           <div className="col-sm-12 col-lg-8 center-div" style={{marginBottom:'2rem'}}>
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <h2 className="section-heading">Frequently Asked Questions About Budget Logistics and Packers </h2>
           </div>
           <div className="col-sm-12 col-lg-8 d-flex flex-column" style={{width: '100%',maxWidth: '1000px',gridGap:'20px'}}>

               <div className="question" onClick={()=>setShow(!show)}>
               <div>
                <p>1. Can i Reschedule my movement after i have paid the token amount?</p>
                <i class="bi bi-caret-down-fill"></i>
                </div>

                {show?
                <Fade top>
                <div className="ANIMATION" style={{backgroundColor:'white'}}>Can i Reschedule my movement after i have paid the token amount?</div>
                </Fade>
                :null }
               </div>
               <div className="question" onClick={()=>setShow(!show)}>
               <div>
                <p>2. Can i Reschedule my movement after i have paid the token amount?</p>
                <i class="bi bi-caret-down-fill"></i>
                </div>

                {show?
                <Fade top>
                <div className="ANIMATION" style={{backgroundColor:'white'}}>Can i Reschedule my movement after i have paid the token amount?</div>
                </Fade>
                :null }
               </div>
               <div className="question" onClick={()=>setShow(!show)}>
               <div>
                <p>3. Can i Reschedule my movement after i have paid the token amount?</p>
                <i class="bi bi-caret-down-fill"></i>
                </div>

                {show?
                <Fade top>
                <div className="ANIMATION" style={{backgroundColor:'white'}}>Can i Reschedule my movement after i have paid the token amount?</div>
                </Fade>
                :null }
               </div>
           </div>
           </div>
</div>
</div>

    </>
  )
}

export default Question