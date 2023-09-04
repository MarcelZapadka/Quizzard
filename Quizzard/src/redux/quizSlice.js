import { createSlice } from '@reduxjs/toolkit'
import getAllAnswers from '../answers-mapper-service';
import { getQuizQuestions } from '../quiz-api-service';

function setQuiz(state, action){
  state.quiz = action.payload;
  state.currentQuestionInfo = state.quiz[0];
  state.currentQuestionIndex = 0;
  state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
  state.isStarted = true;
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    currentQuestionInfo: {},
    currentAnswers: [],
    correctAnswersCount: 0,
    score: 0,
    currentQuestionIndex: 0,
    isStarted: false,
  },
  reducers: {
    incrementCorrectAnswersCount: (state) => {
      state.correctAnswersCount += 1;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    goToNextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      state.currentQuestionInfo = state.quiz[state.currentQuestionIndex];
      state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
    },
    reduceTime: (state) => {
      state.timeRemaining -= 1;
    },
    openTimerStatus: (state) => {
      state.isTimerActive = true;
    },
    closeTimerStatus: (state) => {
      state.isTimerActive = false;
    },
    clearQuiz: (state) =>  state = quizSlice.getInitialState(),
  },
  
  extraReducers: builder => {
    builder.addCase(getQuizQuestions.fulfilled, (state, action) => {
      setQuiz(state, action);
    });
  }
})

export const { incrementCorrectAnswersCount, setScore, goToNextQuestion, clearQuiz } = quizSlice.actions

export default quizSlice.reducer
