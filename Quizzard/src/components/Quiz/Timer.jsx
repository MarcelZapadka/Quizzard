import React, { useEffect } from 'react'
import "./Timer.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux'
import { openTimerStatus, reduceTime, setTimerIntervalId } from '../../redux/timerSlice';

function Timer({endQuiz}) {
  const timeRemaining = useSelector(state => state.timer.timeRemaining);
  const isTimerActive = useSelector(state => state.timer.isTimerActive);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isTimerActive || isTimerActive === undefined) {
      const timeReducer = setInterval(() => {
        dispatch(reduceTime());
      }, 1000)
      dispatch(openTimerStatus());
      dispatch(setTimerIntervalId(timeReducer));
    }
  }, [])

  useEffect(() => {
    if (timeRemaining === -1) {
      endQuiz();
    }
  }, [timeRemaining])
  
  return <CircularProgressbar value={timeRemaining} maxValue={120} text={`${timeRemaining}s`} />
}

export default Timer
