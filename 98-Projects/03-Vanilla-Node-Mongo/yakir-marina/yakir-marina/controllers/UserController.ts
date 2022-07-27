import mongoose from "mongoose";
import UserModel, { UserValidation } from "../models/UserModel";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const register = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
   
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
};


// getPlayerByCookie()



