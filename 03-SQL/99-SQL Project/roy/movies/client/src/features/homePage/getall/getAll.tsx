import React, { useEffect, useState }  from "react";
import axios from "axios";
import Card from "../movieCard";



interface Data {
    data: string,
    id: string,
    imgUrl: string,
    name: string,
    year?: string,
    type?: string,
    director?: string,
    studio?: string,
  }




const GetALL=()=>{
    const [Data, setData] = useState<Data[]>([]);
    async function handleGetAll(){
        try{
              const response = await axios.get('/api/home/get');
              if (!response) throw new Error("No data");
              // The value we return becomes the `fulfilled` action payload
              console.log({response})
              const data =response.data.result;
              console.dir(data);
             setData(data)
             console.log(Data)
              return(data)
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
          {Data.map((data,id) => {
          <Card
          key={id}
          imgUrl={data.imgUrl}
          movie_id={data.id}
          movie_name={data.name}
          year={data.year}
          type={data.type}
          director={data.director}
          studio={data.studio}
          />})};
        </div>
    )
};
export default GetALL;
