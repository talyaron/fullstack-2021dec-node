import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import axios from "axios";
import Card from "../movieCard";
import { useEffect, useState } from "react";
import { CardProps } from "../getall/getAll";
import { getData, getUserId } from "../model";







const SearchResult=()=>{
    const [Data, setData] = useState<CardProps[]>([]);
   
   async function handleSearch(){
    const search= getData();
    const user_id= getUserId();
    console.log(search);
    const response = await axios.get(`/api/home/search?search=${search}`);
        // The value we return becomes the `fulfilled` action payload
        const data= response.data.result
        console.dir(response)
        console.log(data);
        setData(data)
        console.log(Data);
        return data
    };
    useEffect(()=>{
        console.log('run with use effect')
        getUserId()
        getData()
        handleSearch()
      },[]);
    return(
        <div className="container">
            {Data.map((data:CardProps) => (
          <Card
          key={data.movie_id}
          movie_id={data.movie_id}
          imageurl={data.imageurl}
          movie_name={data.movie_name}
          year={data.year}
          type={data.type}
          director={data.director}
          studio={data.studio}></Card>
          ))}
        </div>

    )
}
export default SearchResult;