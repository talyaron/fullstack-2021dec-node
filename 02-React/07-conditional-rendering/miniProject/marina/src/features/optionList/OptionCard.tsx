import { FC } from 'react'
import { FactInterface } from "../factsList/FactsList";

interface OptionCardProps {
  option: FactInterface;
}

export const OptionCard: FC<OptionCardProps> = (props) => {
  const { option } = props;

  return (
    <div >
      <div className="flex__card">
        <img className="flex__card__img" src={option.src} alt="img" />
        <p className="flex__card__text">{option.text}</p>
      </div>
    </div>
  );
};


