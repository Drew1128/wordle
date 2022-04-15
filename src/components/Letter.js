import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';

const Letter = ({ letterPosition, attemptVal }) => {
    const { 
      board, 
      correctWord, 
      currAttempt,
      setDisabledLetter,
      disabledLetter,
     } = useContext(AppContext);
    const letter = board[attemptVal][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almostCorrect = !correct && letter !== '' && correctWord.includes(letter);

  const letterState =
  currAttempt.attempt > attemptVal &&
  (correct ? 'correct' : almostCorrect ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== '' && !correct && !almostCorrect ) {
      setDisabledLetter((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);


  return (
    <div className='letter' id={letterState}>
        {letter}
    </div>
  )
}

export default Letter