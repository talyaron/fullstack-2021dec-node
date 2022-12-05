import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import axios from "axios";
import Card from "../movieCard";
import { CardProps } from "../movieCard";
import { useEffect, useState } from "react";



const Search=()=>{
    const [Data, setData] = useState<CardProps[]>([]);
   async function handleSearch(ev:any){
    ev.preventDefault();
    let search= ev.target[0].value;
    console.log(search)
    const response = await axios.post('/api/home/search',{search});
        // The value we return becomes the `fulfilled` action payload
        const data= response.data.result
        console.log(data);
        setData(data)
        console.log(Data);
        return data
    };
    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" name="search" placeholder="search movie by name" />
                <button type="submit">search</button>
            </form>
            {Data.map((data:CardProps) => (
          <Card
          key={data.movie_id}
          movie_id={data.movie_id}
          imgUrl={data.imgUrl}
          movie_name={data.movie_name}
          year={data.year}
          type={data.type}
          director={data.director}
          studio={data.studio}></Card>
          ))}
        </div>

    )
}
export default Search