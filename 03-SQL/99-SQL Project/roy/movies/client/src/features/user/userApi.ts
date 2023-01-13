import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { send } from 'process';

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

   