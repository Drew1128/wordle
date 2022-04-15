import React, {useContext} from 'react'
import { AppContext } from '../App';

const GameOver = () => {
    const { gameOver, setGameOver, correctWord, currAttempt } = useContext(AppContext);
  
  
  
    return (
    <div className='gameover'>
        <h3>{GameOver.guessedWord ? "You are a SAVAGE!" : "You Suck"}</h3>
        <h1>Correct Word: {correctWord} </h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver