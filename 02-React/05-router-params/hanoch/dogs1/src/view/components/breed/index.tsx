import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import BreedCard from "./BreedCard";
import {getBreedImg, BreedImgInterface} from './getBreedImg';


const BreedImg = ()=>{
    const {breed} = useParams();
    const [breedImage, setBreedImage] = useState<BreedImgInterface[]>([]);

    useEffect(()=>{
        if(breed) {
            getBreedImg(breed).then(item => 
                setBreedImage(item)
            )
        }
    },[])

    return (
        <div>
            <h1>breed: {breed}</h1>
       
            {breedImage.map((image,i)=>{
                return (
                    <BreedCard breedProps={image} key={i}/>
                )
            })}
        </div>
    )
}

export default BreedImg