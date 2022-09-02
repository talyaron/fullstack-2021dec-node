import React from 'react';
import { Link } from 'react-router-dom';
import { secretProps } from '../model';
import { FC } from 'react';

const SecretCard: FC<secretProps> = ({issue, img}) => {

  return (
    <div>
        <h1>{issue}</h1>
        <img src={img} alt="image" />
    </div>
  )
}

export default SecretCard