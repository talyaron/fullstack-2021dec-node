import React  from "react";
import { ReactDOM } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getAsync } from "../homeApi";
import axios from "axios";





const GetALL=()=>{
    async function handleGetAll(ev:any){
              const response = await axios.get('/api/home/get',);
              // The value we return becomes the `fulfilled` action payload
              console.log(response.data.result);
              const data =response.data.result
              return data;
        };
    return(
        <div onClick={handleGetAll}>
            <button type="submit">get All Movies</button>
        </div>
    )
}
export default GetALL;