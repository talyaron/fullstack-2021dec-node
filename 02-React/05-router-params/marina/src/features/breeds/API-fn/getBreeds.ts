import axios from "axios";

export interface Image {
  breed: string;
  src: string;
}

export async function getBreeds(): Promise<Image[]> {
  try {
    const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (!data) throw new Error("No Data ");
    const { message } = data;
    console.log(message);

    // Getting the Object keys from Array
    const breeds = Object.keys(message);

    // In case we have a lot of calls at the same time,
    // the Promise.all() will return the result ONLY after all the requests have completed.
    const images = await Promise.all(breeds.map((breed) => getBreedImageRandom(breed)));
    console.log(images);

    // return breeds;
    return images;

  } catch (error) {
    console.error(error);
    return []; // returning undefined -> demind of TS
  }
}

export async function getBreedImageRandom(breed:string):Promise<Image> {
    try {
        const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        if(!data) throw new Error(`No Data of image of ${breed}`);
        const {message} = data;
        if (!message) throw new Error(`No Data of image of ${breed}-messege`);

        // returns an Object of Breed name & breed`s Image
        return {breed, src: message};

    } catch (error) {
        console.error(error);
        // returning False:
        return { breed, src: '' };
    }
}