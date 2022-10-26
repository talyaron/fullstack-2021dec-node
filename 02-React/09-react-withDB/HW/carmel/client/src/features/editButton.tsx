import React from "react";
import { useState } from "react";

interface buttonProps{
    buttonFunction:Function
}
export const  EditButton = ({buttonFunction}:buttonProps) => {
    return(
    <button onClick={buttonFunction()}>edit</button>
    )
}