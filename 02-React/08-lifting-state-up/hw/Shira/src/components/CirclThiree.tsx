import React from 'react';

interface threeCircleProps{
    color:string,
    createNewColor:Function
}

export const CircleThree = ({color, createNewColor}: threeCircleProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className="circle"  style={{backgroundColor: `#${color}`}} onClick={handleClick}></div>
  )
}
