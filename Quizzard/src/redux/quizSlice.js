import { createSlice } from '@reduxjs/toolkit'
import getAllAnswers from '../answers-mapper-service';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    currentQuestion: {},
    currentAnswers: [],
    correctAnswersCount: 0,
    timeOfCompletion: 0,
    score: 0,
    currentQuestionIndex: 0,
  },
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    incrementCorrectAnswersCount: state => {
      state.correctAnswersCount += 1;
    },
    setTimeOfCompletion: (state, action) => {
      state.timeOfCompletion += action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    goToNextQuestion: state => {
      state.currentQuestionIndex += 1;
    },
    setAnswers: state => {
      state.currentAnswers = getAllAnswers(state.currentQuestion);
    },
    setCurrentQuestion: state => {
      state.currentQuestion = state.quiz[state.currentQuestionIndex]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setQuiz, incrementCorrectAnswersCount, setTimeOfCompletion, setScore, goToNextQuestion, setAnswers, setCurrentQuestion } = quizSlice.actions

export default quizSlice.reducer
