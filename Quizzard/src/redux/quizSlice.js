import { createSlice } from '@reduxjs/toolkit'
import getAllAnswers from '../answers-mapper-service';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    currentQuestionInfo: {},
    currentAnswers: [],
    correctAnswersCount: 0,
    timeOfCompletion: 0,
    score: 0,
    currentQuestionIndex: 0,
  },
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload;
      state.currentQuestionIndex = 0;
      state.currentQuestionInfo = state.quiz[0];
      state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
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
      state.currentQuestionInfo = state.quiz[state.currentQuestionIndex];
      state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
    },
  }
})

export const { setQuiz, incrementCorrectAnswersCount, setTimeOfCompletion, setScore, goToNextQuestion } = quizSlice.actions

export default quizSlice.reducer
