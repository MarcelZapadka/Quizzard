import {React, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import { getQuizQuestions } from './quiz-api-service';
import Quiz from './components/Quiz/Quiz'
import '../src/App.scss'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { clearQuiz, completeQuiz } from './redux/quizSlice';
import { resetTimer } from './redux/timerSlice';
import History from './components/History/History';
import { saveToHistory } from './history-service';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { timerIntervalId, timeRemaining, initialTimerState } = useSelector(state => state.timer);
  const { correctAnswersCount } = useSelector(state => state.quiz);
  const timeOfCompletion = initialTimerState - timeRemaining;

  function startNewQuiz() {
    clearLastQuiz();
    dispatch(getQuizQuestions());
  }

  function endQuiz() {
    clearInterval(timerIntervalId);
    dispatch(completeQuiz());
    saveToHistory({score: correctAnswersCount, time: timeOfCompletion});
    setTimeout(() => {
      clearLastQuiz();
      location.pathname === '/play' ? navigate('/home') : null;
    }, 2000)
  }

  function clearLastQuiz() {
    dispatch(clearQuiz());
    dispatch(resetTimer());
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(timerIntervalId);
      setTimeout(() => {
        endQuiz();
      }, 1000)
    }
  }, [timeRemaining])

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<HomePage startNewQuiz={startNewQuiz}/>}/>
        <Route path='/play' element={<Quiz endQuiz={endQuiz} timeOfCompletion={timeOfCompletion}/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <FooterNav startNewQuiz={startNewQuiz}/>
    </div>
  )
}
