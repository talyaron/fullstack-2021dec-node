import { FC } from 'react'
import { optionsProps } from './factModel';



interface FactCardProps {
  sons: optionsProps;
}

export const SonsCard  = ({ sons }: FactCardProps) => {

  return (
    <div>
      <div className="grid1__card">
        <img className="grid1__card__img" src={sons.src} alt="img" id={sons.id} />
        <p className="grid1__card__text">{sons.text}</p>
      </div>
    </div>
  );
};

export default SonsCard


