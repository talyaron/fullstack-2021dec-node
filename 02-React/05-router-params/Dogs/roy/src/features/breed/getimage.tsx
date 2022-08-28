import axios from "axios";

export interface Image{
        breed:string;
        src:string
}

export async function getBreedImage(breed: string):Promise<Image> {
    try {
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      if (!data) throw new Error(`No data on image of breed ${breed}`);
      const { message } = data;
      if (!message) throw new Error(`No data on image of breed ${breed} -2`);
      return {breed, src:message};
    } catch (error) {
      console.error(error);
      return {breed, src:""};
    }
  }
  