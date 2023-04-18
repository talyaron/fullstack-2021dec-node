import express  from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mysql from "mysql"
import { Connection } from "mongoose";
import { triggerAsyncId } from "async_hooks";
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("client/build"));
app.use(express.json());
app.use(cookieParser());


export const db =  mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1421325',
    database:'apartment'
})

db.connect((error)=>{
    try {
        console.info("🔥 MySql is connected 🛢 ")
        
    } catch (error) {
       console.error(error) 
    }
})


import userRoute from './API/users/userRoute';

import apartmentRoute from './API/apartments/apartmentRoute'


// import { Client } from "socket.io/dist/client";

app.use('/api/users',userRoute)
app.use('/api/apartments',apartmentRoute)


app.get("/apartments", (req, res) => {
    const q = "SELECT * FROM apartment.apartments";
    db.query(q, (error, data) => {
      try {
        if (error) throw error;
        console.log(data);
        res.send({ success: true, data });
      } catch (error) {
        console.error(error);
        res.send({ success: false, error: error.message });
      }
    });
  });

  app.post("/apartments", (req, res) => {
    const { city, address, size, rooms, price, image, owner } = req.body;
  
    const q = "INSERT INTO books (`city`, `address`,`size`, `rooms`, `price`, `image`, `owner`) VALUES (?)";
    const values = [ city, address, size, rooms, price, image, owner ];
    db.query(q, [values], (err, data) => {
      try {
        if (err) throw err;
        console.log(data);
        res.send({
          success: true,
          message: "An apartment created successfully",
          data,
        });
      } catch (error) {
        console.error(error);
        res.send({ success: false, error: error.message });
      }
    });
  });

  
app.delete("/apartments/:id", (req, res) => {
    const apartmentId = req.params.id;
  
    const q = "DELETE FROM apartments WHERE id = ?";
    db.query(q, [apartmentId], (err, data) => {
      try {
        if (err) throw err;
        console.log(data);
        res.send({
          success: true,
          message: "The apartment deleted successfully",
          data,
        });
      } catch (error) {
        console.error(error);
        res.send({ success: false, error: error.message });
      }
    });
  });
  


  app.put("/apartments/:id", (req, res) => {
    const apartmentId = req.params.id;
    const q = "UPDATE apartments SET `city`=?, `address`=?, `size`=?, `rooms`=?,`image`=?, `owner`=?,  WHERE id=?";
    const values = [
      req.body.city,
      req.body.address,
      req.body.size,
      req.body.rooms,
      req.body.price,
      req.body.image,
      req.body.owner,

    ];
    db.query(q, [...values, apartmentId], (err, data) => {
      try {
        if (err) throw err;
        console.log(data);
        res.send({
          success: true,
          message: "An apartment updated successfully",
          data,
        });
      } catch (error) {
        console.error(error);
        res.send({ success: false, error: error.message });
      }
    });
  });
  



app.listen(port,()=>{
    return console.log(`server listen at http://localhost:${port}`)
})