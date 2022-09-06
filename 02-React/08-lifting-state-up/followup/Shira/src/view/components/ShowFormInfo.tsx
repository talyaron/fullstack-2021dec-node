import React from "react";


interface ShowFormInfoProps{
  name:string,
  createNewColor:Function,
  createNewSize:Function
}
const ShowFormInfo = ({name,createNewColor,createNewSize}:ShowFormInfoProps) =>{
return(
  <div>
    <h2>{name}</h2>
    <button onClick={()=>createNewColor()}>New Color</button>
    <button onClick={()=>createNewSize()}>New Size</button>

  </div>
)
}

export default ShowFormInfo;