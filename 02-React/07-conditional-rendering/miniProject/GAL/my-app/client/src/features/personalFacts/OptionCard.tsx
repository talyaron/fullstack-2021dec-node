import { FC } from 'react'
import {Option} from '../personalFacts/factModel'


interface OptionCardProps {
  option: Option;
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

export default OptionCard
