import React, { useState } from 'react';
import { factsProps, factsPropsArray, true1 } from '../model';
import { trueArray } from '../../../App';
import { FC } from 'react';

export const TrueFact = ({img, fact}:true1) => {
    
    const [color, setColor] = useState<string>("gray");
   
    function handleChangeColor(){
        try {
            setColor('green')
            trueArray.push(1)
        } catch (error) {
            console.error(error)
        }
    }
  
    return (
    <button onClick={handleChangeColor}>
      <div className='trueFact' style={{backgroundColor: color}}>
        <img src={img} alt="image" />
        <h3>{fact}</h3>
      </div>
    </button>
  )
}
