import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface guideReg{
    fullName: string,
    country: string,
    city: string,
    telephon: string,
    email: string,
    image: File
}

export const addGuid = createAsyncThunk(
    'addGuid',
    async({fullName, country, city, telephon, email, image}: guideReg) => {
        const formData = new FormData();
        formData.append('image', image)

        const result = await axios.post
            ('/api-guides/add-guide',
            {'full name':fullName, country, city, telephon, email, 'image': formData});
         console.log(result.data);
         return result.data;
         

    }
)
