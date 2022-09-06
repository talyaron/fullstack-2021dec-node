import React from 'react';

interface greenProps{
    color: string,
    createNewColor:Function
}

export const CircleGreen = ({color, createNewColor}:greenProps) => {
  function handleClick(){
    createNewColor()
  }
  return (
    <div className='circle' onClick={handleClick} style={{backgroundColor: `#${color}`}}></div>
  )
}
