import React from 'react';
import '../ModalCard/ModalCard.scss';
import {Product} from '../products/productsModelC'

interface PopUpProps {
  children: React.ReactNode;
  hidePopUpHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalCard:React.FC<PopUpProps> = ({children, hidePopUpHandler }) => {
  return (
    <div>
      <div className='modal'>
        {children}
        <button onClick={hidePopUpHandler}>close</button>
      </div>
    </div>
  );
};

export default ModalCard;

