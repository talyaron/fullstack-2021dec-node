import {createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';
import { config } from 'dotenv';

interface guideReg{
    fullName: string,
    country: string,
    city: string,
    telephon: string,
    email: string,
    image: string
}

export const addGuid = createAsyncThunk(
    'addGuid',
    async({fullName, country, city, telephon, email, image}: guideReg) => {
        
        const imgSrc = Buffer.from(image, 'base64')
        const result = await axios.post
            ('/api-guides/add-guide',
            {fullName, country, city, telephon, email, image: imgSrc});
         console.log(result.data);
         
         return result.data;
         

    }
)
