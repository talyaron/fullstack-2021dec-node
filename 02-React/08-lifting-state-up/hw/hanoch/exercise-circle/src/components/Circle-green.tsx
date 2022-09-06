import React from 'react';

interface greenProps{
    color: string,
    createNewColor:Function
}

export const CircleGreen = ({color, createNewColor}:greenProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle' style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
