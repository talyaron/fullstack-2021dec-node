import React from 'react';

interface fourCircleProps{
    color:string,
    createNewColor:Function
}

export const CircleFour = ({color, createNewColor}:fourCircleProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle'  style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
