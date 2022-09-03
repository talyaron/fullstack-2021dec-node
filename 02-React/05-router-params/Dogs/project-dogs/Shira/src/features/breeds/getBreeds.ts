import axios from "axios";


export interface Image{
    breed:string;
    src:string;
}
export async function getBreeds(): Promise<Image[]>{
try {
    const {data} = await axios.get('https://dog.ceo/api/breeds/list/all');
    // console.log(data);
   const {message}  = data;
//   console.log(message);

const breeds = Object.keys(message);
//   console.log(breeds);

const images = await Promise.all(breeds.map(breed=>getBreedImageRandom(breed)));
console.log(images);



  
  return images;
    
} catch (error) {
    console.error(error);
 
    return[]
}
}

export async function getBreedImageRandom(breed: string):Promise<Image> {
    try {
        const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    if(!data) throw new Error(`No data of breed:  ${breed}`);
    const {message}  = data;
    if(!message) throw new Error(`No data on image of breed:  ${breed} - 2`);
        return {breed, src:message};

    } catch (error) {
    console.error(error);
    return {breed, src:''};
        
    }
}