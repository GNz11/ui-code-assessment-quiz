import React from 'react'
import axios from 'axios'
import MultipleQuestion from './MultipleQuestion.js'
import BooleanQuestion from './BooleanQuestion.js'
import TextQuestion from './TextQuestion.js'
import Summary from './Summary.js'

// user is expected to answer only 5 questions
// this will change based on quiz requirements
const QUIZ_SIZE = 5

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      question_idx: 0,
      correct_answers: 0,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getQuestions()
  }

  handleSubmit(event) {
    event.preventDefault();
    const questionData = this.state.results[this.state.question_idx]
    if (event.target.answer.value === questionData.correct_answer) {
      // console.debug("correct!")
      let correct_answers = this.state.correct_answers
      this.setState({
        correct_answers: ++correct_answers
      });
    }

    let next_question_idx = this.state.question_idx;
    this.setState({
      question_idx: ++next_question_idx
    })
  }

  async getQuestions() {
    // console.debug('fetching questions..')
    try {
      const response = await axios.get('/api/questions')
      let questions = response.data.results
      // If you get a negative value, they go in order a,b , otherwise they go in order b,a - so they get 'shuffled'
      questions = questions.sort( () => { return 0.5-Math.random() } )
      this.setState({
        results: questions
      });
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    if (!this.state.results || this.state.results.length === 0) {
      return <h1>Loading Quiz...</h1>
    }

    if (this.state.question_idx === QUIZ_SIZE) {
      return <Summary correct={this.state.correct_answers} questionCount={QUIZ_SIZE}/>
    }

    const questionData = this.state.results[this.state.question_idx]
    let questionUI = <div>question type not supported...</div>
    if (questionData.type === "multiple") {
      questionUI = <MultipleQuestion questionData={questionData}/>
    } else if (questionData.type === "boolean") {
      questionUI = <BooleanQuestion questionData={questionData}/>
    } else if (questionData.type === "text") {
      questionUI = <TextQuestion questionData={questionData}/>
    }
    return (

        <form onSubmit={this.handleSubmit}>
          {questionUI}
          <div>
          <input class="btn btn-primary" type="submit" value="Next" />
          </div>
        </form>

    )
  }

}
