import axios from "axios";

export async function getimages(breed: string| undefined) {
  try {
    const { data } = await axios.get(`https://dog.ceo/api/${breed}/list/all`);

    const { message } = data;
    // console.log(message) ;

    const breeds = Object.keys(message);
    
    return breeds; 
  } catch (error) {
    console.error(error);
    return [];
    
  }
}