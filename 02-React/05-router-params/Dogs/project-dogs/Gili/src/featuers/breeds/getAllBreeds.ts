import axios from 'axios';

export interface Image{
    breed:string;
    src:string
  }

export async function getAllBreeds(): Promise<Image[]> {
	try {
		const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
		if (!data) throw new Error("couldn't find data");
		const { message } = data;
		const breeds = Object.keys(message); //array of breeds
		const images = await Promise.all(breeds.map((breed) => getBreedImageRandom(breed)));

		return images;
	} catch (error) {
        console.log(error)
		return [];
	}
}

export async function getBreedImageRandom(breed: string):Promise<Image> {
    try {
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      if (!data) throw new Error(`No data on image of breed ${breed}`);
      const { message } = data;
      if (!message) throw new Error(`No data on image of breed ${breed} - 2`);
      return {breed, src:message};
    } catch (error) {
      console.error(error);
      return {breed, src:''};
    }
  }
  