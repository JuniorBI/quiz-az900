import React, { useContext } from 'react';
import './Welcome.css';
import Quiz from "../img/quiz.png";
import { QuizContext } from '../context/quiz';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Bem-vindo</h2>
        <h3>Clique no botão para começar!</h3>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <div>
        <img src={Quiz} alt="inicio do Quiz" />
        </div>
    </div>
  );
};

export default Welcome;