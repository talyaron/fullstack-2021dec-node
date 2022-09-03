import React from "react";
import { text } from "stream/consumers";

interface CardProps {
    text: string;
    imgUrl: string;
}

const Card = (props: CardProps) => {

const {text, imgUrl} = props


    return (
       
            <div className="card">
                <h1>{text}</h1>
            <img src={imgUrl} alt="" />

            </div>
  

    );

}

export default Card;