import React, { useState } from 'react';
import { factsProps } from '../model';
import { FC } from 'react';

export const TrueFact = ({img, trueFact}:factsProps) => {
    
    const [color, setColor] = useState<string>("gray");
   
    function handleChangeColor(){
        try {
            setColor('green')
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
    <button onClick={handleChangeColor}>
      <div className='trueFact' style={{backgroundColor: color}}>
        <img src={img} alt="image" />
        <h3>{trueFact}</h3>
      </div>
    </button>
  )
}
