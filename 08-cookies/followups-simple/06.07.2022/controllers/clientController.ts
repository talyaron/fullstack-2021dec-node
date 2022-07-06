
// import express from 'express';
// import mongoose from "mongoose";

export async function setHello (req, res) {
  try {       
    const {name} = req.cookie;  
    // console.log(req.headers);  
    res.cookie("name", "express");
    res.send({success: true});
    console.log(req.cookie);
    console.log(name);
    
  } catch (error) {
    console.error(error);
    res.send({error: error.message});
  }
}


