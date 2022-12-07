import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserRegister } from '../models/userInterface'
import { UserLogin } from "../models/userInterface";


export const registerAsync = createAsyncThunk(
  "/user/register",
  async ({ username, email, password, name }: UserRegister) => {
    try {
      const response = await axios.post("/api/auth/register", {
        username,
        email,
        password,
        name,
      });

      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// export const getUserByCookie = createAsyncThunk(
//   "/user/user-by-cookie",
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get("/auth/user-by-cookie");
//       const userCookie = response.data.user;

//       // if (userCookie) {
//       //   const { error } = UserValidation.validate(userCookie);
//       //   if (error) throw error;
//       //   return userCookie;
//       // }
//       return userCookie;
//       console.log("From getUserByCookie: ", userCookie);
//     } catch (error: any) {
//       console.error(error);
//       return thunkApi.rejectWithValue({
//         error: error.message,
//         message: error.message,
//       });
//     }
//   }
// );

// LOGIN THUNK
// export const loginAsync = createAsyncThunk(
//   "/user/login",
//   async ({ username, password }: UserLogin) => {
//     try {
//       const response = await axios.post("/auth/login", {
//         username,
//         password,
//       });
//       const user = response.data.user;
//       console.log("userAPI: ", response.data.user);
//       console.log("userAPI: ", user);

//       if (user) {
//         // const { error } = UserValidation.validate(user);
//         console.log("currentUser from API", user);
//         localStorage.setItem("currentUser", JSON.stringify(user));
//       }
//       return response.data.user;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );

// GET BY COOKIE
