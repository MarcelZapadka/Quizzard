import React from 'react'
import '../FooterNav/FooterNav.scss'
import { NavLink } from 'react-router-dom';
import { SlControlPlay, SlHome, SlUser } from "react-icons/sl";

function FooterNav() {

  function continueOrStartNewQuiz() {
    quiz.length === 0 || currentQuestionIndex === 9 ? startNewQuiz() : null;
  }

  return (
    <footer className='footer'>
        <div className='link-wrapper'>
          <NavLink to="home" className={({isActive}) => isActive ? 'active' : 'inactive'}>
            <SlHome/>
            <p>Home</p>
          </NavLink>
        </div>
        <div className='link-wrapper'>
          <NavLink onClick={continueOrStartNewQuiz} to="play" className={({isActive}) => isActive ? 'active' : 'inactive'}>
            <SlControlPlay/>      
            <p>Play</p>
          </NavLink>
        </div>
        <div className='link-wrapper'>
          <NavLink to="history" className={({isActive}) => isActive ? 'active' : 'inactive'}>
            <SlUser/>
            <p>History</p>
          </NavLink>
        </div>
      </footer>
  )
}

export default FooterNav
