import React from 'react'
import Timer from './Timer';
import { FcNext } from "react-icons/fc";
import './InfoPanel.scss'

function InfoPanel({endQuiz}) {
  return (
    <section className='info-panel'>
      <p style={{color: "orange"}}>Medium</p>
      <Timer endQuiz={endQuiz}/>
      <div className='skip-wrapper'>
        <p>SKIP</p>
        <FcNext className='icon'/>
      </div>
  </section>
  )
}

export default InfoPanel
