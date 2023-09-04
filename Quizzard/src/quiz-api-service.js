import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuizQuestions = createAsyncThunk('quiz/getQuiz', async () => {
  const response = await fetch('https://the-trivia-api.com/v2/questions');
  const quizQuestions = await response.json();
  return quizQuestions;
})
