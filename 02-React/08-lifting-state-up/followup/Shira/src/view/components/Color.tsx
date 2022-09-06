import React from "react";


interface ColorProps {
    color:string,
    size:number
  }

const Color = ({color,size}:ColorProps) =>{
return(
    <div className="colored" style={{backgroundColor:`#${color}`  , width:`${size}px`}}>{color}</div>
)
}

export default Color;