import React from 'react'
import { useState, useEffect } from 'react';

interface OptionProps {
    optionName: string,
    isTruth: boolean,
    optionImg: string,
    setCounter: Function,

}


const Option = ({ optionName, isTruth, optionImg, setCounter }: OptionProps) => {
    let colorAnswer = isTruth
    let [optionColor, setOptionColor] = useState("white")
    let [optionMessage, setOptionMessage] = useState("")



    function handleOptionClick(e:any) {

console.log(e.target.parentElement.id)


        if (colorAnswer === false) {
            setOptionColor("red")
            setOptionMessage("You are wrong")
            if( e.target.parentElement.id !== "pressed"){
                setCounter()
                e.target.parentElement.id = "pressed"
            }

           
        }
        else if (colorAnswer === true) {
            setOptionColor("green")
            setOptionMessage("You are right")
        }


    }

    return (

        <div style={{
            backgroundColor: optionColor
        }}
            onClick={handleOptionClick} id="none" className='optionBox'>
            <h1 >{optionName}</h1>
            <img src={optionImg} alt="" />
            <h2>{optionMessage}</h2>
        </div>
    )
}


export default Option