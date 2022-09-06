import React from 'react';

interface redProps{
    color:string,
    createNewColor:Function
}

export const CircleRed = ({color, createNewColor}: redProps) => {
  function handleClick(){
    createNewColor()
  }
  return (
    <div className="circle" onClick={handleClick} style={{backgroundColor: `#${color}`}} ></div>
  )
}
