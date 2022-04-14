import React from 'react'
import Key from './Key';

const Keyboard = () => {
    const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const keys3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className='keyboard'>
        <div className='line1'>
            {keys1.map((key) => {
                return <Key keyVal={key} />;
            })}
        </div>
        <div className='line2'>
             {keys2.map((key) => {
                return <Key keyVal={key} />;
            })}
        </div>
        <div className='line3'>
            <Key keyVal='ENTER' />
             {keys3.map((key) => {
                return <Key keyVal={key} />;
            })}
            <Key keyVal='DELETE' />
        </div>
    </div>
  )
}

export default Keyboard