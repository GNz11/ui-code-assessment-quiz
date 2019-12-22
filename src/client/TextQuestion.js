import React from 'react'

const TextQuestion = (props) => {
  return (
    <label>
      {props.questionData.question}
      <div>
        <textarea name="answer" />
      </div>
    </label>
  )
}

export default TextQuestion
