import React from 'react';
import { SecretListProps } from '../model';
import SecretCard from './Secretcard';
import { Link } from 'react-router-dom';
import { FC } from 'react';

export const Secrets: FC<SecretListProps> = ({secretArray}) => {
  return (
    <div>
        
        {secretArray.map((scrt)=>{
            return(
                <Link key={scrt.issue} to={`/${scrt.issue}`}>
                <SecretCard {...scrt}/>
                {/* <SecretCard issue={scrt.issue} img={scrt.img}/> */}
                </Link>
            );
        })}
      
    </div>
  )
}
