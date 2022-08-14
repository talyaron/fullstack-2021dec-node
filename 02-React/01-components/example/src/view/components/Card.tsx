import { useState } from "react";
import "./card.scss";
import { getJoke } from "../../controlers/getJoke";

import CardSubtitle from "./CardSubtitle";

interface CardProps {
  text: string;
  imgUrl: string;
}

const Card = (props: CardProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [negCounter, setNegCounter] = useState<number>(1);
  const [joke, setJoke] = useState('this will be a joke');
  const {text,imgUrl } = props;

  async function handleAdd() {
    try {
      setCounter(counter + 1);
      setNegCounter(negCounter - 1);
      const jk = await getJoke();
      setJoke(jk);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="card" >
        <h3>{text}</h3>
        <img src={imgUrl} alt="" />
        <p onClick={handleAdd}>{joke}</p>
        <p>{counter}</p>
        <p>{negCounter}</p>
      </div>
      <CardSubtitle />
    </>
  );
};

export default Card;

