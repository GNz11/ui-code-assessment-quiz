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
          <div key={option}>
          <input name="answer" type="radio" key={option} value={option} defaultChecked={false}/>
          {option}
          </div>
        ))
      }
    </label>
  )
}

export default MultipleQuestion
