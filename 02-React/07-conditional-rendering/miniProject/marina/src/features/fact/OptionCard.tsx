import { FC } from 'react'
import { useParams, Link } from "react-router-dom";
import { FactProps, Option } from './factModel';


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

