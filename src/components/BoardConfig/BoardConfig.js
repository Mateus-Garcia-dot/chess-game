import './boardConfig.css';
import { useState } from 'react';
import { pd, pl } from '../chessPieces/index';

const BoardConfig = () => {
  const [playerColor, setPlayerColor] = useState('');
  const [difficulty, setDifficulty] = useState('');

return (
  <div className='center' id='config'>
    <h1> how do you want to play? </h1>
    <h2> Dark or Light </h2>
    <div>
      <input  className={playerColor === 'd' ? "pwnSelect active" : "pwnSelect"} type="image" src={pd} onClick={(e) => setPlayerColor('d') } />
      <input  className={playerColor === 'l' ? "pwnSelect active" : "pwnSelect"} type="image" src={pl} onClick={(e) => setPlayerColor('l') } />
    </div>
    <h2> Dificculty </h2>
    <div id='difficultyContainer'> 
      <button className={difficulty === 'easy' ? "difficultyButton active" : "difficultyButton"}  onClick={(e) => setDifficulty('easy')} > Easy </button>
      <button className={difficulty === 'medium' ? "difficultyButton active" : "difficultyButton"} onClick={(e) => setDifficulty('medium')} > Medium </button>
      <button className={difficulty === 'hard' ? "difficultyButton active" : "difficultyButton"} onClick={(e) => setDifficulty('hard')} > Hard </button>
    </div>

    <button id='startButton'> Start </button>

  </div>
  );
};



export default BoardConfig;
