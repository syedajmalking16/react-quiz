import React, { useState, useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
function Quiz() {
  const {score, setscore ,setGameState} = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [OptionChosen, setOptionChosen] = useState("");
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == OptionChosen) {
      setscore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
const finishQuiz=()=>{
  if (Questions[currentQuestion].answer == OptionChosen) {
    setscore(score + 1);
  }
  setGameState("endScreen");
};
  return (
    <div className="Quiz"><h1>{Questions[currentQuestion].prompt}</h1>
      <div className="option">
        <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].OptionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].OptionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].OptionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].OptionD}</button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish Quiz</button>
      ):(
        <button onClick={nextQuestion}> NextQuestion</button>
      )}
      
    </div>
  );
}

export default Quiz;