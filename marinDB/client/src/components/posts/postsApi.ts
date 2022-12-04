import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import PostInterface from "../../models/postInterface";

export const getPostsAsync = createAsyncThunk("/posts", async (_, thunkApi) => {
  try {
    // console.dir(thunkApi);
    // const response = await axios.post("/posts");
    // console.log(response.data);
  } catch (err) {
    console.error(err);
  }
});
