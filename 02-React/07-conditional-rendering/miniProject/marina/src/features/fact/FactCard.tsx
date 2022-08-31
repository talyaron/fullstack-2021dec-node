import { FC } from 'react'
import { FactInterface } from "../factsList/FactsList";

interface FactCardProps {
  fact: FactInterface;
}

export const FactCard: FC<FactCardProps> = (props) => {
  const { fact } = props;
  return (
    <div>
      <div className="grid__card">
        <img className="grid__card__img" src={fact.src} alt="img" />
        <p className="grid__card__text">{fact.text}</p>
      </div>
    </div>
  );
};




