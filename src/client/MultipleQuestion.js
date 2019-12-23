import React from 'react'

const MultipleQuestion = (props) => {
  let options = props.questionData.incorrect_answers
  options.push(props.questionData.correct_answer);
  // shuffle multiple choice
  options.sort( () => { return 0.5-Math.random() } )
  return (
    <label>
      {props.questionData.question}
      {options.map(option => (
          <div class="form-check" key={option}>
          <input class="form-check-input" name="answer" type="radio" key={option} value={option} defaultChecked={false}/>
          <label class="form-check-label" for={option}>{option}</label>
          </div>
        ))
      }
    </label>
  )
}

export default MultipleQuestion
