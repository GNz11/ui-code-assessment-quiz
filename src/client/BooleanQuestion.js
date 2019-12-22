import React from 'react'

const BooleanQuestion = (props) => {
  return (
    <label>
      {props.questionData.question}
      <div>
        <input name="answer" type="radio" key="True" value="True" defaultChecked={false}/>
        True
      </div>
      <div>
        <input name="answer" type="radio" key="False" value="False" defaultChecked={false}/>
        False
      </div>
    </label>
  )
}

export default BooleanQuestion
