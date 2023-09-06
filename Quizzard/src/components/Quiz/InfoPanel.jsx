import React from 'react'
import Timer from './Timer';
import { FcNext } from "react-icons/fc";
import './InfoPanel.scss'

function InfoPanel({skipQuestion}) {

  return (
    <section className='info-panel'>
      <p style={{color: "orange"}}>Medium</p>
      <Timer/>
      <div className='skip-wrapper' onClick={skipQuestion}>
        <p>SKIP</p>
        <FcNext className='icon'/>
      </div>
  </section>
  )
}

export default InfoPanel
