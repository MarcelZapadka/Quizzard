import React from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import getQuizzQuestions from './quiz-api-service';
import Quiz from './components/Quiz/Quiz'
import '../src/App.scss'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setQuiz, setCurrentQuestion, setAnswers } from './redux/quizSlice';

export default function App() {
  const dispatch = useDispatch();
  function startNewQuiz() {
    getQuizzQuestions().then(quizQuestions => {
      dispatch(setQuiz(quizQuestions));
      dispatch(setCurrentQuestion());
      dispatch(setAnswers());
    });
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<HomePage startNewQuiz={startNewQuiz}/>}/>
        <Route path='/play' element={<Quiz startNewQuiz={startNewQuiz}/>}/>
      </Routes>
      <FooterNav/>
    </div>
  )
}
