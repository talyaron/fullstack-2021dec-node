import React from 'react';
import { Link } from 'react-router-dom';
export interface secretProps{
        issue: string,
        img: string,
        id: string
} 

const Secrets = (secret: secretProps) => {
  return (
    <div>
        <h1>{secret.issue}</h1>
        <img src={secret.img} alt="secret" />
    </div>
  )
}

export default Secrets