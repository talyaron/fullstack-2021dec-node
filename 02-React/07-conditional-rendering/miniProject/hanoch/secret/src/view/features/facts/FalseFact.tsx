import React from 'react';
import { useState } from 'react';
import { factsProps, false1 } from '../model';
import { FC } from 'react';
import { falseArray } from '../../../App';

export const FalseFact = ({img, fact}:false1) => {
    const [color, setColor] = useState<string>("gray");
   
    function handleChangeColor(){
        try {
            setColor('red')
            falseArray.push(1)
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
    <button onClick={handleChangeColor}>
      <div className='falseFact' style={{backgroundColor: color}}>
        <img src={img} alt="image" />
        <h3>{fact}</h3>
      </div>
    </button>
  )
}
