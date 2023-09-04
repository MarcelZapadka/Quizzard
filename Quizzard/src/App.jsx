import {React, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import { getQuizQuestions } from './quiz-api-service';
import Quiz from './components/Quiz/Quiz'
import '../src/App.scss'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { clearQuiz } from './redux/quizSlice';
import { resetTimer } from './redux/timerSlice';

export default function App() {
  const dispatch = useDispatch();
  const timerId = useSelector(state => state.timer.timerIntervalId);

  function startNewQuiz() {
    clearLastQuiz();
    dispatch(getQuizQuestions());
  }

  function clearLastQuiz() {
    clearInterval(timerId);
    dispatch(clearQuiz());
    dispatch(resetTimer());
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<HomePage startNewQuiz={startNewQuiz}/>}/>
        <Route path='/play' element={<Quiz clearLastQuiz={clearLastQuiz}/>}/>
      </Routes>
      <FooterNav startNewQuiz={startNewQuiz}/>
    </div>
  )
}
