import{useState} from "react";
function App()
{
const questions=[
  {
    questionText:"Which is the frontend framework used for creating web apps?",
    answerOption:[
      {answerText:"a)Node Js",isCorrect:false},
      {answerText:"b)React Js",isCorrect:true},
      {answerText:"c)Express Js",isCorrect:false},
      {answerText:"d)Mongo DB",isCorrect:false},
    ]
  },
  {
    questionText:"which data base is used for to store the data?",
    answerOption:[
      {answerText:"a)Mongo DB",isCorrect:true},
      {answerText:"b)React Js",isCorrect:false},
      {answerText:"c)Node Js",isCorrect:false},
      {answerText:"d)Angular Js",isCorrect:false},
    ]
  },
  {
    questionText:"which document database is used for to store the data?",
    answerOption:[
      {answerText:"a)Node js",isCorrect:false},
      {answerText:"b)React js",isCorrect:false},
      {answerText:"c)Express js",isCorrect:false},
      {answerText:"d)Mongo DB",isCorrect:true},
    ]
  },
  {
    questionText:"Mention at least four frontend technologies?",
    answerOption:[
      {answerText:"a)HTML",isCorrect:false},
      {answerText:"b)CSS",isCorrect:false},
      {answerText:"c)JAVA SCRIPT",isCorrect:false},
      {answerText:"d)ALL THE ABOVE",isCorrect:true},
    ]
  },
  {
    questionText:"Which is one of the core building block of React?", 
    answerOption:[
      {answerText:"a)Props",isCorrect:false},
      {answerText:"b)Lists",isCorrect:false},
      {answerText:"c)Components",isCorrect:true},
      {answerText:"d)Variables",isCorrect:false},
    ]
  },
  {
    questionText:"Which is a web application framework?",
    answerOption:[
      {answerText:"a)Node js",isCorrect:false},
      {answerText:"b)React js",isCorrect:false},
      {answerText:"c)Express js",isCorrect:true},
      {answerText:"d)Mongo DB",isCorrect:false},
    ]
  },
  {
    questionText:"MERN Stands for??",
    answerOption:[
      {answerText:"a)MongoDB, Express, React, Node",isCorrect:true},
      {answerText:"b)Express, MongoDB, React, Node",isCorrect:false},
      {answerText:"c)React, Express, MongoDB, Node",isCorrect:false},
      {answerText:"d)Node, Express, React, MongoDB",isCorrect:false},
    ]
  },
  {
    questionText:"React.JS was first used in 2011 for?",
    answerOption:[
      {answerText:"a)Twitter",isCorrect:false},
      {answerText:"b)Instagram",isCorrect:false},
      {answerText:"c)Face book",isCorrect:true},
      {answerText:"d)whats app",isCorrect:false},
    ]
  },
  {
    questionText:"Who is created react?",
    answerOption:[
      {answerText:"a)Guido van Rossum",isCorrect:false},
      {answerText:"b)Jordan Walke",isCorrect:true},
      {answerText:"c)Ryan Dahl ",isCorrect:false},
      {answerText:"d)Dwight Merriman",isCorrect:false},
    ]
  },
  {
    questionText:"Which year node js was initial released?",
    answerOption:[
      {answerText:"a)February 11, 2009",isCorrect:false},
      {answerText:"b)November 16, 2010",isCorrect:false},
      {answerText:"c)May 29, 2013 ",isCorrect:false},
      {answerText:"d)May 27, 2009",isCorrect:true},
    ]
  },
]
const [currentQuestion,setCurrentQuestion]=useState(0)
const [showScore,setShowScore]=useState(false)
const [score,setScore]=useState(0)
const Handle=(isCorrect)=>{
  if(isCorrect)
  {
    setScore(score+1)
  }
  const nextQuestion=currentQuestion+1
  if(nextQuestion<questions.length)
  {
    setCurrentQuestion(nextQuestion)
  }
  else
  {
    setShowScore(true)
  }
}
return(
  <div className="quiz">
    {showScore ?(
        <div className="score-section">
          YOU HAVE SCORED {score} OUT OF {questions.length}!!!
     </div>
      ):(
        <>
        <div className="question-section">
          <span>QUESTION:{currentQuestion+1}</span> /{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOption.map((answerOption) =>(
            <button onClick={() => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        </>
      )
      }
</div>
)
}
export default App
