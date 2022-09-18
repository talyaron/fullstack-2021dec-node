import React from 'react';

interface yellowProps{
    color:string,
    createNewColor:Function
}

export const CircleYellow = ({color, createNewColor}:yellowProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle'  style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
