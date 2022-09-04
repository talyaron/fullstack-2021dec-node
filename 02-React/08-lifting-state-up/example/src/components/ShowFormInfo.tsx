import React from 'react'

interface ShowFormInfoProps{
    name:string
} 

const ShowFormInfo = ({name}:ShowFormInfoProps) => {
  return (
    <div>"{name}"</div>
  )
}

export default ShowFormInfo