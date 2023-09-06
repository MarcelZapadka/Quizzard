import { React } from 'react'
import "./Quiz.scss"
import { useDispatch, useSelector } from "react-redux"
import { incrementCorrectAnswersCount, goToNextQuestion } from '../../redux/quizSlice';
import InfoPanel from './InfoPanel';
import Results from '../Results/Results';

function Quiz({endQuiz}) {
  const { quiz, currentAnswers, currentQuestionIndex, currentQuestionInfo, isDataFetched, showResults, correctAnswersCount } = useSelector(state => state.quiz);
  const { intervalId, timeOfCompletion } = useSelector(state => state.timer);
  const answersList = getDisplayedAnswers();
  const dispatch = useDispatch();
  const lastQuestion = currentQuestionIndex === quiz.length - 1;

  function getDisplayedAnswers() {
    return currentAnswers.map(answer => <input type="button" value={answer} key={answer} onClick={() => submitAnswer(answer)}/>);
  }

  function nextQuestion() {
    dispatch(goToNextQuestion());
  }

  function skipQuestion() {
    lastQuestion ? endQuiz() : nextQuestion();
  }

  function submitAnswer(answer) {
    if (lastQuestion) {
      clearInterval(intervalId);
      endQuiz();
      return
    }
    if (answer === currentQuestionInfo.correctAnswer) {
      dispatch(incrementCorrectAnswersCount());
      nextQuestion();
      return
    }
     nextQuestion();
  }

  if (isDataFetched && !showResults) return (
      <main className='dashboard quiz'>
        <InfoPanel skipQuestion={skipQuestion}/>

        <section className='question-and-answers-section'>
          <div className='question-wrapper'>
            <p className='question-no'>Question {currentQuestionIndex + 1} of 10</p>
            <p>{quiz[currentQuestionIndex]?.question.text}</p>
          </div>
          
          <form className='answers-form'>{answersList}</form>
        </section>
      </main>
  )

  if (showResults) return (
    <main className='dashboard quiz'>
      <h1>Congratulations! Your result is:</h1>
      <Results correctAnswers={correctAnswersCount} timeOfCompletion={timeOfCompletion}/>
    </main>
  )

  return (
    <main className='dashboard quiz'>
      <p>loading</p>
    </main>
  )
}

export default Quiz
