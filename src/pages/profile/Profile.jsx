import React from 'react'
import { useState } from 'react'
import Tab1 from './userProfileTab'
import './profile.css'
import Addresstab from './Addresstab'
import Tab4 from './Tab4'
import UserProfileTab from './userProfileTab'
import { Navigate, useNavigate } from 'react-router-dom'


const Profile = () => {
    const navigate = useNavigate()
    const [tab , setTab] = useState(1)
  return (
    <>
    
        <div className='section-padding' style={{ display: 'flex', flexDirection: 'column'}}>
           <UserProfileTab />
          
           
        </div>




    </>
  )
}

export default Profile
