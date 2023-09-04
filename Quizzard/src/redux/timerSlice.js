import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timeOfCompletion: 0,
    timeRemaining: 10,
    isTimerActive: false,
    timerIntervalId: null,
  },
  reducers: {
    setTimeOfCompletion: (state, action) => {
      state.timeOfCompletion += action.payload;
    },
    reduceTime: (state) => {
      state.timeRemaining -= 1;
    },
    openTimerStatus: (state) => {
      state.isTimerActive = true;
    },
    setTimerIntervalId: (state, action) => {
      state.timerIntervalId = action.payload;
    },
    resetTimer: (state) =>  state = timerSlice.getInitialState(),
  },
})

export const { setTimeOfCompletion, reduceTime, openTimerStatus, setTimerIntervalId, resetTimer } = timerSlice.actions

export default timerSlice.reducer
