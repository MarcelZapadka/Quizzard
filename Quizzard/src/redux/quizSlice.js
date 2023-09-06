import { createSlice } from '@reduxjs/toolkit'
import getAllAnswers from '../answers-mapper-service';
import { getQuizQuestions } from '../quiz-api-service';

function setQuiz(state, action){
  state.quiz = action.payload;
  state.currentQuestionInfo = state.quiz[0];
  state.currentQuestionIndex = 0;
  state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
  state.isDataFetched = true;
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    currentQuestionInfo: {},
    currentAnswers: [],
    correctAnswersCount: 0,
    currentQuestionIndex: 0,
    isDataFetched: false,
    showResults: false,
  },
  reducers: {
    incrementCorrectAnswersCount: (state) => {
      state.correctAnswersCount += 1;
    },
    goToNextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      state.currentQuestionInfo = state.quiz[state.currentQuestionIndex];
      state.currentAnswers = getAllAnswers(state.currentQuestionInfo);
    },
    completeQuiz: (state) => {
      state.showResults = true;
    },
    clearQuiz: (state) =>  state = quizSlice.getInitialState(),
  },
  

  extraReducers: builder => {
    builder.addCase(getQuizQuestions.fulfilled, (state, action) => {
      setQuiz(state, action);
    });
  }
})

export const { incrementCorrectAnswersCount, setScore, goToNextQuestion, clearQuiz, completeQuiz } = quizSlice.actions

export default quizSlice.reducer
