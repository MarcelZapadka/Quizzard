import React from 'react'
import '../HomePage/HomePage.scss'
import Button from 'react-bootstrap/Button';
import { FcGraduationCap } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { getLastQuizInfo } from '../../history-service';

function HomePage({startNewQuiz}) {
  const navigate = useNavigate();
  const isDataFetched = useSelector(state => state.quiz.isDataFetched);
  const lastQuiz = getLastQuizInfo();

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
      {lastQuiz}
      <section className='buttons-wrapper'>
        <Button className='button' variant="primary" onClick={startNewGame}> Start new Quiz </Button>
        <Button disabled={!isDataFetched} className='button' variant="primary" onClick={navigateToQuiz}> Continue Quizz </Button>
      </section>
    </div>
  )
}

export default HomePage
