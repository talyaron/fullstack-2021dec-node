import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { factsProps } from '../model';
import { factsPropsArray } from '../model';
import { TrueFact } from './TrueFact';
import { FalseFact } from './FalseFact';
import back from '../images/back.png'




export const Facts: FC<factsPropsArray> = ({factsArray}) => {
    const {scrt} = useParams();
    console.log(scrt);
    const [personFact, setPersonFact] = useState<any>({});
    const person:any = factsArray.find(person=> person.issue === scrt )
    
    console.log(person);
    
    useEffect(()=>{
        setPersonFact(person)
    })
    const image = './images/back.png'
    
        
  return (
    
    <div>
            <Link to={'/choose-secret'}>
                <img src={back}  alt="back" style={{width: 30   }}/>
            </Link>
            <div className="facts">
                <TrueFact img={personFact.img} fact={personFact.trueFact}/>
                <FalseFact img={personFact.img} fact={personFact.wrongFact}/>
            </div>
        
    
        {/* {factsArray.map((fact)=>{
           
            return(
                <div className="facts">
                    <TrueFact {...fact}/>
                    <FalseFact {...fact}/>
                </div>
            );
        })} */}
    </div>
  )
}
