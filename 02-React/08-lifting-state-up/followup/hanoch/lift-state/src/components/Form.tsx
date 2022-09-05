import React from 'react';
import {useState} from 'react';

interface FormProps{
     name:string
}

export const Form = () => {
    function handleShowForm(ev:any){
        try {
            const name = ev.target.elements.name.value;

        } catch (error) {
            console.error(error)
        }
        
    }
    const [names, setNames] = 
  return (
    <div onSubmit={handleShowForm}>
        <input type="text" name="name" id="" />
        <button type='submit'>send</button>
    </div>
  )
}
