import React from 'react';

interface yellowProps{
    color:string,
    createNewColor:Function
}

export const CircleYellow = ({color, createNewColor}:yellowProps) => {
  function handleClick(){
    createNewColor()
  }
  return (
    <div className='circle' onClick={handleClick} style={{backgroundColor: `#${color}`}}></div>
  )
}
