import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    initialTimerState: 10,
    timeRemaining: 10,
    isTimerActive: false,
    timerIntervalId: null,
  },
  reducers: {
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

export const { reduceTime, openTimerStatus, setTimerIntervalId, resetTimer } = timerSlice.actions

export default timerSlice.reducer
