import React, { useContext } from 'react'
import { AppContext } from '../App';

const Key = ({ keyVal, bigKey }) => {
    const { currAttempt, onDelete, onEnter, onSelectLetter } = useContext(AppContext);
    
    const selectLetter = () => {
        if (keyVal === 'ENTER') {
          onEnter();
        } else if (keyVal === 'DELETE') {
            onDelete();
        } else {
        if (currAttempt.letterPosition > 4) return;
        onSelectLetter(keyVal);
     }
    };


  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key