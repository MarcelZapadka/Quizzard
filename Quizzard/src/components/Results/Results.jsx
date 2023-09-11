import './Results.scss'
import { FcApproval, FcClock } from "react-icons/fc";

function Results({correctAnswers, timeOfCompletion}) {
  return (
    <section className='last-results-wrapper'>
        <div className='results'>
          <div className='results-details'>
            <p className='score'>{correctAnswers}/10</p>
            <FcApproval className='icon'/>
          </div>
          <p className='text'>ANSWERS</p>
        </div>
        <div className='results'>
          <div className='results-details'>
            <p className='score'>{timeOfCompletion}</p>
            <FcClock className='icon'/>
          </div>
          <p className='text'>SECONDS</p>
        </div>
      </section>
  )
}

export default Results
