import React from "react";
import '../UI/Card.scss'

interface CardProps {
  title: string;
  src: string;
  subtitle:string; 
}

const Card = (props: CardProps) => {
  const { title, src, subtitle } = props;
  return (
    <div className="Card">
      <h1 className="Card-title">{title}</h1>
      <img className="Card-img" src={src} alt="Modal"></img>
      <p className="Card-p">{subtitle}</p>
    </div>
  );
};

export default Card;
