import { React } from 'react'
import "./Quiz.scss"
import { useDispatch, useSelector } from "react-redux"
import { incrementCorrectAnswersCount, goToNextQuestion } from '../../redux/quizSlice';
import { useNavigate } from "react-router-dom";
import InfoPanel from './InfoPanel';

function Quiz({clearLastQuiz}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quiz = useSelector(state => state.quiz.quiz);
  const currentAnswers = useSelector(state => state.quiz.currentAnswers);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const currentQuestionInfo = useSelector(state => state.quiz.currentQuestionInfo);
  const isStarted = useSelector(state => state.quiz.isStarted);
  let answersList = getDisplayedAnswers();

  function getDisplayedAnswers() {
    return currentAnswers.map(answer => <input type="button" value={answer} key={answer} onClick={() => submitAnswer(answer)}/>);
  }

  function endQuiz() {
    clearLastQuiz();
    navigate("/home");
  }

  function submitAnswer(answer) {
    if (currentQuestionIndex === quiz.length - 1) {
      endQuiz();
      return
    }
    if (answer === currentQuestionInfo.correctAnswer) {
      dispatch(incrementCorrectAnswersCount());
      dispatch(goToNextQuestion());
      return
    }
    dispatch(goToNextQuestion());
  }

  if (isStarted) return (
      <main className='dashboard quiz'>
        <InfoPanel endQuiz={endQuiz}/>

        <section className='question-and-answers-section'>
          <div className='question-wrapper'>
            <p className='question-no'>Question {currentQuestionIndex + 1} of 10</p>
            <p>{quiz[currentQuestionIndex]?.question.text}</p>
          </div>
          
          <form className='answers-form'>{answersList}</form>
        </section>
      </main>
  )

  return (
    <main className='dashboard quiz'>
      <p>loading</p>
    </main>
  )
}

export default Quiz
