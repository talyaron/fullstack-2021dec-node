import { FC } from 'react'
import { useParams } from "react-router-dom";
import { FactProps } from './factModel';


interface OptionCardProps {
  option: FactProps;
}



export const OptionCard: FC<OptionCardProps> = (props) => {
  const { option } = props;
  const { id } = useParams();

  return (
    <div >
      <div className="flex__card">
        <img className="flex__card__img" src={option.src} alt="img" />
        <p className="flex__card__text">{option.text}</p>
      </div>
    </div>
  );
};


