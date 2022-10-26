import React from "react";
import '../view/Card.scss';

interface CardProps {
  text: string;
  src: string;
}

const Card = (props: CardProps) => {
  const { text, src } = props;
  return (
    <div className="Card">
      <h1 className="Card-title">{text}</h1>
      <img className="Card-img" src={src}></img>
    </div>
  );
};

export default Card;


