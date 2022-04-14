import React, { useContext } from 'react'
import { AppContext } from '../App';

const Letter = ({ letterPosition, attemptVal }) => {
    const { board, setBoard } = useContext(AppContext);
    const letter = board[attemptVal][letterPosition];

  return (
    <div className='letter'>
        {letter}
    </div>
  )
}

export default Letter