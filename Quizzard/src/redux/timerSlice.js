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
      if (action.payload) {
        state.timeOfCompletion -= action.payload
      } else {
        const initialTime = timerSlice.getInitialState().timeRemaining;
        state.timeOfCompletion = initialTime - state.timeRemaining;
      }
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
