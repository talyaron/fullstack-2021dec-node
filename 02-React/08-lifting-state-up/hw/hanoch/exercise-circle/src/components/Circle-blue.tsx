import React from 'react';

interface blueProps{
    color:string,
    createNewColor: Function
}

export const CircleBlue = ({color, createNewColor}:blueProps) => {
  function handleClick(ev:any){
    createNewColor(ev.style.backgroundColor)
  }
  return (
    <div className='circle' onClick={handleClick} style={{backgroundColor: `#${color}`}}></div>
  )
}
