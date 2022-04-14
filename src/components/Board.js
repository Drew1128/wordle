import React, { useState } from 'react'
import { boardDefault } from '../Words';
import Letter from './Letter';

const Board = () => {
    
    return (
    <div className='board'>
        <div className='row'>
            <Letter letterPosition={0} attemptVal={0}/>
            <Letter letterPosition={1} attemptVal={0}/>
            <Letter letterPosition={2} attemptVal={0}/>
            <Letter letterPosition={3} attemptVal={0}/>
            <Letter letterPosition={4} attemptVal={0}/>
        </div>
        <div className='row'>
            <Letter letterPosition={0} attemptVal={1}/>
            <Letter letterPosition={1} attemptVal={1}/>
            <Letter letterPosition={2} attemptVal={1}/>
            <Letter letterPosition={3} attemptVal={1}/>
            <Letter letterPosition={4} attemptVal={1}/>
        </div>
        <div className='row'>
            <Letter letterPosition={0} attemptVal={2}/>
            <Letter letterPosition={1} attemptVal={2}/>
            <Letter letterPosition={2} attemptVal={2}/>
            <Letter letterPosition={3} attemptVal={2}/>
            <Letter letterPosition={4} attemptVal={2}/>
        </div>
        <div className='row'>
            <Letter letterPosition={0} attemptVal={3}/>
            <Letter letterPosition={1} attemptVal={3}/>
            <Letter letterPosition={2} attemptVal={3}/>
            <Letter letterPosition={3} attemptVal={3}/>
            <Letter letterPosition={4} attemptVal={3}/>
        </div>
        <div className='row'>
            <Letter letterPosition={0} attemptVal={4}/>
            <Letter letterPosition={1} attemptVal={4}/>
            <Letter letterPosition={2} attemptVal={4}/>
            <Letter letterPosition={3} attemptVal={4}/>
            <Letter letterPosition={4} attemptVal={4}/>
        </div>
    </div>
  )
}

export default Board