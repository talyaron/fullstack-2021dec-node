import React, { useEffect, useState }  from "react";
import axios from "axios";
import Card from "../movieCard";
export interface CardProps {
  movie_id:string,
  imageurl: string,
  movie_name: string,
  year?: string,
  type?: string,
  director?: string,
  studio?: string,
}

const GetALL=()=>{
    const [Data, setData] = useState<CardProps[]>([]);
    async function handleGetAll(){
        try{
              const response = await axios.get('/api/home/get');
              if (!response) throw new Error("No data");
              // The value we return becomes the `fulfilled` action payload
              console.log({response})
              const data =response.data.result;
              console.dir(data[0].imageurl);
             setData(data)
             console.log(Data)
              return(Data)
        }
        catch (error)
        {
            console.error(error)
        }
        };
       useEffect(()=>{
            console.log('run with use effect')
           handleGetAll()
          },[]);
    return(
        <div>
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
};
export default GetALL;
