import axios from "axios";
import Card from "./favCard";
import { useEffect, useState } from "react";
import { CardProps } from "../getall/getAll";
import { getUserId } from "../model";

const PresentFav = () => {
  const [Data, setData] = useState<CardProps[]>([]);

  async function handleFav() {
    const user_id = getUserId();
    console.log(user_id);
    const response = await axios.post("/api/home/present", { user_id });
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    const data = response.data;
    handlePresent(data);
    return data;
  }
  async function handlePresent(data) {
    console.log(data);
    const movie = data[0].movies_name;
    console.log(movie);
    const response = await axios.post("/api/home/fav", { movie });
    const info= response.data.result
    console.dir(response)
    console.log(info);
    setData(info)
    console.log(Data);
    return info
    
  }
  useEffect(() => {
    console.log("run with use effect");
    getUserId();
    handleFav();
  }, []);
  return (
    <div>
      {Data.map((data: CardProps) => (
        <Card
          key={data.movie_id}
          movie_id={data.movie_id}
          imageurl={data.imageurl}
          movie_name={data.movie_name}
          year={data.year}
          type={data.type}
          director={data.director}
          studio={data.studio}
        ></Card>
      ))}
    </div>
  );
};
export default PresentFav;
