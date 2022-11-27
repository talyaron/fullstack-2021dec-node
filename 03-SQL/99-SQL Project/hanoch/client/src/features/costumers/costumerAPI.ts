import { createAsyncThunk } from "@reduxjs/toolkit";
import { CostumerDetails } from "./costumerSlice";
import axios from "axios";

export const AddCostumerAsync = createAsyncThunk(
    'addCostumer',
    async({fullname, telephon, email, password}: CostumerDetails) =>{
        try {
            const result = await axios.post('/api-guides/add-costumer',
             {fullname, telephon, email, password});
             console.log(result.data);
             
             return result.data;
        } catch (error) {
            console.error(error);
            
        }
        
    }
)