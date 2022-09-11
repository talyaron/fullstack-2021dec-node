import axios from "axios";




export async function getBreeds(): Promise<string[] | undefined> {
    try {
        const {data} = await axios.get('https://dog.ceo/api/breeds/list/all');
        
        const {message} = data;
        console.log(message);

        const breeds = Object.keys(message);  //array of breeds 

        

    } catch (error) {
        console.error(error)
        return [];
    }
} 
    
