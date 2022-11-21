import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface guideReg{
    fullName: string,
    country: string,
    city: string,
    telephon: number,
    email: string,
    formData: File
}

export const addGuid = createAsyncThunk(
    'addGuid',
    async({fullName, country, city, telephon, email, formData}: guideReg) => {
        const result = await axios.post
            ('/api-guides/add-guide',
            {'full name':fullName, country, city, telephon, email, image: formData});
         console.log(result.data);
         return result.data;
         

    }
)
