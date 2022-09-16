import { useContext, useState, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import az9 from './assets/img_az900.png';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz AZ-900</h1>
      <img src={az9} alt="logo" width="300px" />
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App
