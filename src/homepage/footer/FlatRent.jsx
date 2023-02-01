import React, { useState } from 'react'

const FlatRent = () => {
  const [pack,setpack]= useState([1,2,3,4,5,6,7,8,9,0])
  return (
   <>

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

export default FlatRent