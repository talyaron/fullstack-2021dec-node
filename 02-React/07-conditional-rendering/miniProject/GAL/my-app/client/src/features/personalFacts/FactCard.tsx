import { FC } from 'react'
import { FactProps } from './factModel';



interface FactCardProps {
  fact: FactProps;
}

export const FactCard: FC<FactCardProps> = (props) => {
  const { fact } = props;
  return (
    <div>
      <div>
        <img src={fact.src} alt="img" />
        <p>{fact.text}</p>
      </div>
    </div>
  );
};

