import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export async function getJokeApi() {
  try {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    if (!data) throw new Error("No data");
    const { value } = data;

    if (!value) throw new Error("No joke");
    return value;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export const getJoke = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    const joke = await getJokeApi();
    // The value we return becomes the `fulfilled` action payload
    return joke;
  }
);
