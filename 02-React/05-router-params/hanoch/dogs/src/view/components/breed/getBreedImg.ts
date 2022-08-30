import axios from "axios";

export interface BreedImgInterface{
    image:string
};

export async function getBreedImg(breed:string):Promise<BreedImgInterface[]>{
    const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`);

    const {message} = data;

    return message;
}
