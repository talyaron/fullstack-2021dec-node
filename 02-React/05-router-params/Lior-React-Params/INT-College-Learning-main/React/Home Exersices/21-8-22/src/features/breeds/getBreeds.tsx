import axios from "axios";

export async function getBreeds(): Promise<string[]> {
    try {
        const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
        if (!data) throw new Error("Couldn't recieve data from -> Axios GET Request");

        const { message } = data;
        const breeds = Object.keys(message);

        return breeds;
    } catch (error) {
        console.error(error);
        return [];
    }
}