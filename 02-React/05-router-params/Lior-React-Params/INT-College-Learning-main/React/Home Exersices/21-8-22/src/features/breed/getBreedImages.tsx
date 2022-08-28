import axios from "axios"

export async function getBreedImages(breed:string | undefined) {
    try {
        const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        if(!data) throw new Error("Couldn't reiceve data from : Axios GET Request");
        const { message } = data;
        return message;
    } catch (error) {
        console.error(error)
    }
}