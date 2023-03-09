import React,{useState} from 'react'
import { Fade } from 'react-reveal'
import './question.css'

function Question({QuesArr}) {
  const [show,setShow] = useState()

  const handlestate=(e)=>{
     const name = e.target.name;
     
  }

const showhide =(index)=>{

var div = document.getElementById("question"+index)

if(div.childNodes[1].style.display=='none'){
  div.childNodes[1].style.display='inline-block'
}
else{
  div.childNodes[1].style.display='none'
}
}


  return (
    <>
  <div className="py-5 section-margin " id="question-box">
   <div className="container">
        <div className="row center-div" style={{flexDirection:'column'}}>
           <div className="col-sm-12 col-lg-8 center-div" style={{marginBottom:'2rem'}}>
                {/* <p className="section-subheading">WE ARE GROWING</p> */}
                <h2 className="section-heading">Frequently Asked Questions About Budget Logistics and Packers </h2>
           </div>
           <div className="col-sm-12 col-lg-8 d-flex flex-column" style={{width: '100%',maxWidth: '1000px',gridGap:'20px'}}>

            {QuesArr?.map((element,index)=>{

                return <div className="question" id={"question"+index} onClick={()=>showhide(index)}>
               <div>
                <p>{index+1} {element?.question}</p>
                <i class="bi bi-caret-down-fill"></i>
                </div>
                <Fade top>
                <div className="ANIMATION" style={{backgroundColor:'white',display: 'none'}}> {element?.answer}</div>
                </Fade>
               
               </div>
            })}
               
              
           </div>
           </div>
</div>
</div>

    </>
  )
}

export default Question