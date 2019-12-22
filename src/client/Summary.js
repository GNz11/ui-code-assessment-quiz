import React from 'react'

const Summary = (props) => {
  return (
    <div>
      <h1>Summary</h1>
      <div>Correct: {props.correct}</div>
      <div>Wrong: {props.questionCount - props.correct}</div>
      <div>Questions answered: {props.questionCount}</div>
      <div>Final Score: {Math.floor((props.correct/props.questionCount) * 100)}%</div>
      <button type="button" onClick={() => window.location.reload(false)}>Restart Quiz!</button>
    </div>
  )
}

export default Summary
