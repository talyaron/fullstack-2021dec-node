import axios from "axios";

export interface Breeds{
    name:string,
    img:string
};

export const getBreedsData = async ()=>{
    try {
        
   
    const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    const { message } = data;
    console.log(message);
    const breeds = Object.keys(message); //array of breeds

    const images = await Promise.all(breeds.map(breed=>getCategoryImage(breed)));
    console.log(images);
} catch (error) {
        console.error(error);
        }

};

export const getCategoryImage = async (breed: string)=>{
    const { data } = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      if (!data) throw new Error(`No data on image of breed ${breed}`);
      const { message } = data;
      if (!message) throw new Error(`No data on image of breed ${breed} - 2`);
      return {breed, img:message};
};