import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal.jsx/ProfileModel';

const InfoCArd = () => {

    const [modelOpened , setModalOpened] = useState(false)
  return (
    <div className='InfoCard'>
    <div className='infoHead'>
        <h4>Your Info</h4>
        <div>
        <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />
        <ProfileModal modalOpened={modelOpened} setModalOpened={setModalOpened}/>
        </div>
    </div>

    <div className='info'>
        <span>
            <b>Status </b>
        </span>
        <span>Single</span>
    </div>

    <div className='info'>
        <span>
            <b>Lives in </b>
        </span>
        <span>Haldwani</span>
    </div>

    <div className='info'>
        <span>
            <b>Works at </b>
        </span>
        <span>Amazon</span>
    </div>

    <button className='button logout-button'>Logout</button>
    
    </div>
  )
}

export default InfoCArd
