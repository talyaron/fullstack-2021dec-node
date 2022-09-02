import React from 'react';
import { useState } from 'react';
import { factsProps } from '../model';
import { FC } from 'react';

export const FalseFact = ({img, wrongFact}:factsProps) => {
    const [color, setColor] = useState<string>("gray");
   
    function handleChangeColor(){
        try {
            setColor('red')
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
    <button onClick={handleChangeColor}>
      <div className='falseFact' style={{backgroundColor: color}}>
        <img src={img} alt="image" />
        <h3>{wrongFact}</h3>
      </div>
    </button>
  )
}
