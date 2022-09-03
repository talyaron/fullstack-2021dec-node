import axios from "axios";

export interface Breeds{
    name:string;
    img:string
};

export async function getBreedsData (): Promise<Breeds[]>{
    try {
        
   
    const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(data);
    
    const { message } = data;
    console.log(message);
    const breeds= Object.keys(message); //array of breeds

    const images = await Promise.all(breeds.map(breed=>getCategoryImage(breed)));
    console.log(images);
    return images
    } catch (error) {
        console.error(error);
        return []
        }

};

export  async function getCategoryImage (breed:string): Promise<Breeds>{
    try {
        
    
    const { data } = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      console.log(data);
      
      if (!data) throw new Error(`No data on image of breed ${breed}`);
      const { message } = data;
      if (!message) throw new Error(`No data on image of breed ${breed} - 2`);
      return {name:breed, img:message};
    } catch (error) {
        console.error(error)
        return {name: '', img: ''}
    }
};