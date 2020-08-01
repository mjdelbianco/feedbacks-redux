import React, { useState } from 'react';

// 
import ViewQuiz from '../ViewQuiz/viewQuiz';

// import children
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';

function CreateQuizMain (props) {
  
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb

  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: [],
    time: 0,
  }

  const [ question, setQuestion ] = useState(questionInitialState)

  const handleQuestionSubmit = function (fullQuestion) {
    setQuiz((question)=>[...question, fullQuestion])
    // will use fetch to send to backend and save in database

    console.log(quiz);
  }

  const handleQuizSubmit = function () {
    setDb((quizzes)=>[...quizzes, quiz]);
    setQuiz([]);
    console.log(db);
  }
  
  return (
    <div className="create-quiz-main">
      <div className="create-quiz-main__create-question-form">
        <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion}/>
        <button onClick={handleQuizSubmit}>Save Quiz</button>
      </div>

      <div className="create-quiz-main__quiz-preview">
        <h2>Quiz preview</h2>
        <ViewQuiz quiz={quiz} />
        {/* <CreateQuestionPreview question={question} /> */}
      </div>
    </div>
  )
}

export default CreateQuizMain;