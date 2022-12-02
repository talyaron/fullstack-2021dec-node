import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface userRegister{
    email:string
    password:string;
    name:string;
}
interface userLogin{
  email:string
  password:string;
}

export const registerAsync = createAsyncThunk(
    'user/register',
    async ({email, password, name}:userRegister) => {
      const response = await axios.post('/api/users/register',{email, password, name});
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data);
      return response.data;
    }
  );

  export const loginAsync = createAsyncThunk(
    'user/login',
    async ({email, password}:userLogin) => {
      const response = await axios.get(`/api/users/login?email=${email}&password=${password}`);
      console.log(response.data);
      return response.data;
    }
  );