import axios from "axios";

export async function getBreedsImage(breed: string): Promise<string> {
    try {
        const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        if (!data) throw new Error("Couldn't recieve data from Axios GET Request");
        const { message } = data;
        return message;
    } catch (error) {
        console.error(error);
        return '';
    }
}
