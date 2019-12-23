import React from 'react'

const BooleanQuestion = (props) => {
  return (
    <label>
      {props.questionData.question}
      <div class="form-check">
        <input class="form-check-input" name="answer" type="radio" key="True" value="True" defaultChecked={false}/>
        <label class="form-check-label" for="True">True</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" name="answer" type="radio" key="False" value="False" defaultChecked={false}/>
        <label class="form-check-label" for="False">False</label>
      </div>
    </label>
  )
}

export default BooleanQuestion
