import React, { useEffect, useState } from "react";
import {getBreedsData, Breeds} from './getData';
import Category from "./CategoryCard";
import './styles/categoryCard.css';

const BreedsCategory = ()=>{
    const [breeds, setBreeds] = useState<Breeds[]>([]);
    useEffect(()=>{
        getBreedsData().then((brds: Breeds[])=>{
            if (brds.length > 0) {
                console.log(brds);
                setBreeds(brds)
            }
        })
    },[]);
    return(
        <div className="breedsCategory">
            {breeds.map((brd, i)=><Category breed={brd}/>)}
        </div>
    )
};

export default BreedsCategory;