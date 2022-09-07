import React from 'react';

interface twoCircleProps{
    color: string,
    createNewColor:Function
}

export const CircleTwo = ({color, createNewColor}:twoCircleProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle' style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
