import {createAsyncThunk} from '@reduxjs/toolkit';
import { ResultType } from '@remix-run/router/dist/utils';

import axios from 'axios';
import { config } from 'dotenv';
import { GuideDetails } from './guideSlice';

export const addGuid = createAsyncThunk(
    'addGuid',
    async({fullName, country, city, telephon, email, image}: GuideDetails) => {
            console.log(image)
        const result = await axios.post
            ('/api-guides/add-guide',
            {fullName, country, city, telephon, email, image });
         console.log(result.data);
         return result.data;
    }
);

export const allGuidesAsync = createAsyncThunk(
    'allGuides',
   async () => {
    const results = await axios.get('/api-guides/find-all-guides')
    console.log(results.data);
    return results.data;
    
   }
)
