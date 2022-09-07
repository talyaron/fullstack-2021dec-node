import { FC } from 'react'
import { FactProps } from '../fact/factModel';


type FactCardProps = {
  fact: FactProps;
}

export const FactCard: FC<FactCardProps> = ({ fact }) => {
  return (
    <div>
      <div className="grid__card">
        <img className="grid__card__img" src={fact.src} alt="img" />
        <p className="grid__card__text">{fact.text}</p>
      </div>
    </div>
  );
};




