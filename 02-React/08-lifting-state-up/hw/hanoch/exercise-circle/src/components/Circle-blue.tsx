import React from 'react';

interface blueProps{
    color:string,
    createNewColor: Function
}

export const CircleBlue = ({color, createNewColor}:blueProps) => {
  function handleClick(ev:any){
    const color = ev.target.style.backgroundColor
    createNewColor(color)
  }
  return (
    <div className='circle' style={{backgroundColor: `#${color}` }} onClick={handleClick}></div>
  )
}
