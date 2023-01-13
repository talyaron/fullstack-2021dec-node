import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



interface get{
  get:string
}




  export const getAsync = createAsyncThunk(
    'home/get',
    async ({get}:get) => {
      const response = await axios.get('/api/home/get',);
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data.result[0]);
      const data =response.data.result[0]
      return data;
    }
  );
