import { React, useEffect} from 'react'
import "./Quiz.scss"
import { FcNext } from "react-icons/fc";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import getQuizzQuestions from '../../quiz-api-service';
import { useDispatch, useSelector } from "react-redux"

function Quiz() {


  useEffect(() => {
    // getQuizzQuestions().then(data => console.log(data));
  }, [])

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
            <p className='question-no'>Question 1 of 10</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, laudantium ex magnam totam quas dolores?</p>
          </div>
          
          <form className='answers-form'>
            <input type="button" value={"Hello"}/>
            <input type="button" value={"Hello"} />
            <input type="button" value={"Hello"} />
            <input type="button" value={"Hello"} />
          </form>
        </section>
      </main>
  )
}

export default Quiz
