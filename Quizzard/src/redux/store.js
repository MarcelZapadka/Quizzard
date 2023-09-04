import { configureStore } from "@reduxjs/toolkit"
import  quizReducer from "./quizSlice"
import timerReducer from "./timerSlice"

export default configureStore({
  reducer: {
    quiz: quizReducer,
    timer: timerReducer,
  }
})
