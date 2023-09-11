import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './History.scss'
import { deleteFromHistory, getHistory } from '../../history-service';
import CloseButton from 'react-bootstrap/CloseButton';

function History() {
  const history = showHistory();
  const [,forceReRender] = useState(0)

  function deleteQuizFromHistory(quizId) {
    deleteFromHistory(quizId);
    forceReRender(state => state + 1); // It is not good and commong practice to force React components to re-render.
  }                                     // Although in this small use-case this is safe and justified: calling localstorage
                                        // will not make react components to re-render, so we have to do it manually.
  function showHistory () {
    const history = getHistory();
    return history?.map((quiz, index) => 
      <tr key={quiz.id}>
        <td>{index + 1}</td>
        <td>{quiz.score}/10</td>
        <td>{quiz.time}s.</td>
        <td>{quiz.date}</td>
        <td><CloseButton className='delete-button' onClick={() => deleteQuizFromHistory(quiz.id)}/></td>
      </tr>
    )
  }

  if (history) return (
    <section className='dashboard quiz'>
      <Table striped  hover size='lg' responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {history}
      </tbody>
    </Table>
    </section>
  )

  return (
    <section className='dashboard quiz'>
    <p>No history</p>
    </section>
  )
}

export default History
