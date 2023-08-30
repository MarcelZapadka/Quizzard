import React from 'react'
import HomePage from './components/HomePage/HomePage'
import FooterNav from './components/FooterNav/FooterNav'
import '../src/App.scss'
import { Route, Routes } from 'react-router-dom'
import Quiz from './components/Quiz/Quiz'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/play' element={<Quiz/>}/>
      </Routes>

      <FooterNav/>
    </div>
  )
}
