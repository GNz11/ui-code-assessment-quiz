import React from 'react'

const Summary = (props) => {
  return (
    <div>
      <h3>SUMMARY</h3>
      <div>Correct: <span class="font-weight-bold">{props.correct}</span>
      </div>
      <div>Wrong: <span class="font-weight-bold">{props.questionCount - props.correct}</span>
      </div>
      <div>Questions answered: <span class="font-weight-bold">{props.questionCount}</span>
      </div>
      <div>Final Score: <span class="font-weight-bold">{Math.floor((props.correct/props.questionCount) * 100)}%</span>
      </div>
      <div>
        <button type="button" class="btn btn-primary" onClick={() => window.location.reload(false)}>Restart Quiz</button>
      </div>
    </div>
  )
}

export default Summary
