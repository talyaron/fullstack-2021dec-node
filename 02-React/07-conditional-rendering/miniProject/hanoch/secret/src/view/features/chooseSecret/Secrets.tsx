import React from 'react';
import { SecretListProps } from '../model';
import { trueArray } from '../../../App';
import { falseArray } from '../../../App';
import SecretCard from './Secretcard';
import { Link } from 'react-router-dom';
import { FC } from 'react';

export const Secrets: FC<SecretListProps> = ({secretArray}) => {
  
  
  return (
    <div>
        <h1>{trueArray.length} correct answers </h1>
        <h1>{falseArray.length} wrong answers</h1>
        {secretArray.map((scrt)=>{
            return(
                <Link key={scrt.issue} to={`/choose-secret/${scrt.issue}`}>
                <SecretCard {...scrt}/>
                {/* <SecretCard issue={scrt.issue} img={scrt.img}/> */}
                </Link>
            );
        })}
      
    </div>
  )
}
