import {Option} from '../personalFacts/factModel'
import './PersonalFacts.scss'

interface OptionCardProps {
  option: Option;
}



export const OptionCard = ({option}: OptionCardProps)  => {

  return (
    <div >
      <div className="flex__card">
        <img className="flex__card__img" src={option.src} alt="img" id={option.id}/>
        <p className="flex__card__text">{option.text}</p>
      </div>
    </div>
  );
};

export default OptionCard
