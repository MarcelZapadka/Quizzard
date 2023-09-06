import {React, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import { getQuizQuestions } from './quiz-api-service';
import Quiz from './components/Quiz/Quiz'
import '../src/App.scss'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { clearQuiz, completeQuiz } from './redux/quizSlice';
import { resetTimer, setTimeOfCompletion } from './redux/timerSlice';

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
    clearInterval(timerIntervalId);
    dispatch(setTimeOfCompletion());
    dispatch(completeQuiz());
    window.
    setTimeout(() => {
      clearLastQuiz();
      location.pathname === '/play' ? navigate('/home') : null;
    }, 3500)
  }

  function clearLastQuiz() {
    dispatch(clearQuiz());
    dispatch(resetTimer());
  }

  useEffect(() => {
    if (timeRemaining === -1) {
      endQuiz();
      dispatch(setTimeOfCompletion(1));
    }
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
