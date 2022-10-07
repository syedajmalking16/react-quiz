import React , {useState,useContext} from 'react';
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";

import {QuizContext }from "./Helpers/Contexts";
function App() {
  const [gameState , setGameState] = useState("menu");
  const [score, setscore] =useState(0);
  return (
    <div className="App">
      <h1>quiz app</h1>
    <QuizContext.Provider value={{gameState,setGameState, score, setscore}}>

      {gameState==="menu"&&<MainMenu/>}
      {gameState==="quiz"&&<Quiz/>}
      {gameState==="EndScreen"&&<EndScreen/>}
      </QuizContext.Provider>
      </div>
  );
}

export default App;
