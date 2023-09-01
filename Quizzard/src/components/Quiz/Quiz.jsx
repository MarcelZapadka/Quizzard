import { React, useEffect} from 'react'
import "./Quiz.scss"
import { FcNext } from "react-icons/fc";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from "react-redux"

function Quiz({startNewQuiz}) {
  const quiz = useSelector(state => state.quiz.quiz);
  const currentAnswers = useSelector(state => state.quiz.currentAnswers);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  let answersList = getDisplayedAnswers();

  useEffect(() => {
    quiz.length === 0 ? startNewQuiz() : null;
  }, [])

  function getDisplayedAnswers() {
    return currentAnswers.map((answer, index) => <input type="button" value={answer} key={`Answer ${index}`} />);
  }

  return (
      <main className='dashboard quiz'>
        <section className='info-panel'>
          <p style={{color: "orange"}}>Medium</p>
          <CircularProgressbar value={45} maxValue={100} text={`45s`} />
          <div className='skip-wrapper'>
            <p>SKIP</p>
            <FcNext className='icon'/>
          </div>
        </section>

        <section className='question-and-answers-section'>
          <div className='question-wrapper'>
            <p className='question-no'>Question {currentQuestionIndex + 1} of 10</p>
            <p>{quiz[currentQuestionIndex]?.question.text}</p>
          </div>
          
          <form className='answers-form'>{answersList}</form>
        </section>
      </main>
  )
}

export default Quiz
