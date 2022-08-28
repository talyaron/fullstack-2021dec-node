import axios from "axios";

export async function getimages(breed:string):Promise<string> {
  try {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

    const { message } = data;
    // console.log(message) ;

    
    
    return message; 
  } catch (error) {
    console.error(error);
    return '';
    
  }
}