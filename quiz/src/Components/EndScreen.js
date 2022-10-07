import React from 'react'
import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from '../Helpers/QuestionBank';
import "../App.css"

function EndScreen() {
  const { score,setscore,setGameState } = useContext(QuizContext);
  const restartQuiz =()=>{
    setscore(0);
    setGameState("menu");
  }
  return (
    <div className='Endscreen'><h1>Quiz Finished</h1>
      <h3>{score }/{Questions.length }</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
      
  )
}
export default EndScreen;