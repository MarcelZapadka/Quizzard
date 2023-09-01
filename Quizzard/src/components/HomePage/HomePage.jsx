import React from 'react'
import '../HomePage/HomePage.scss'
import Button from 'react-bootstrap/Button';
import { FcGraduationCap, FcApproval, FcClock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function HomePage({startNewQuiz}) {
  const navigate = useNavigate();

  function navigateToQuiz() {
    navigate("/play");
  }

  function startNewGame() {
    navigateToQuiz();
    startNewQuiz();
  }

  return (

      <div className='dashboard'>
       <h1 className='hello'>Hello Marcel! <FcGraduationCap className='cap-icon'/></h1>
       <p>Last Quiz result:</p>
       <section className='last-results-wrapper'>
          <div className='results'>
            <div className='results-details'>
              <p className='score'>7/10</p>
              <FcApproval className='icon'/>
            </div>
            <p className='text'>ANSWERS</p>
          </div>
          <div className='results'>
            <div className='results-details'>
              <p className='score'>46</p>
              <FcClock className='icon'/>
            </div>
            <p className='text'>SECONDS</p>
        </div>
       </section>
       <section className='buttons-wrapper'>
        <Button className='button' variant="primary" onClick={startNewGame}> Start new Quiz </Button>
        <Button className='button' variant="primary" onClick={navigateToQuiz}> Continue Quizz </Button>
       </section>
      </div>
  )
}

export default HomePage
