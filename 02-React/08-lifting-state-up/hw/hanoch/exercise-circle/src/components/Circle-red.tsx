import React from 'react';

interface redProps{
    color:string,
    createNewColor:Function
}

export const CircleRed = ({color, createNewColor}: redProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className="circle"  style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
