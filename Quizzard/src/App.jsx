import {React, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import { getQuizQuestions } from './quiz-api-service';
import Quiz from './components/Quiz/Quiz'
import '../src/App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { clearQuiz } from './redux/quizSlice';
import { resetTimer } from './redux/timerSlice';
import { useNavigate } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { timerIntervalId, timeRemaining } = useSelector(state => state.timer);

  function startNewQuiz() {
    clearLastQuiz();
    dispatch(getQuizQuestions());
  }

  function endQuiz() {
    clearLastQuiz();
    location.pathname === '/play' ? navigate('/home') : null;
  }

  function clearLastQuiz() {
    clearInterval(timerIntervalId);
    dispatch(clearQuiz());
    dispatch(resetTimer());
  }

  useEffect(() => {
    timeRemaining === -1 ? endQuiz() : null
  }, [timeRemaining])

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<HomePage startNewQuiz={startNewQuiz}/>}/>
        <Route path='/play' element={<Quiz endQuiz={endQuiz}/>}/>
      </Routes>
      <FooterNav startNewQuiz={startNewQuiz}/>
    </div>
  )
}
