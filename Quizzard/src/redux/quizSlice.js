import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    timeOfCompletion: 0,
    score: 0,
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
  }
})

// Action creators are generated for each case reducer function
export const { setQuiz, incrementCorrectAnswersCount, setTimeOfCompletion, setScore } = quizSlice.actions

export default quizSlice.reducer
