import { FC } from 'react'
import { FactProps } from './factModel';
import '../factList/factList.scss';


interface FactCardProps {
  fact: FactProps;
}

export const FactCard: FC<FactCardProps> = (props) => {
  const { fact } = props;
  return (
    <div>
      <div>
        <img className="grid" src={fact.src} alt="img" />
        <p className='text'>{fact.text}</p>
      </div>
    </div>
  );
};

