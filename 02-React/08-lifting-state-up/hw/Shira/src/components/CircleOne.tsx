import React from 'react';

interface oneCircleProps{
    color:string,
    createNewColor: Function
}

export const CircleOne = ({color, createNewColor}:oneCircleProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle' style={{backgroundColor: `#${color}` }} onClick={handleClick}></div>
  )
}
