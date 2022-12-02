import express from "express";
import { register } from "./userCont";

const router = express.Router();

// router.get('/shira',(req,res)=>{
//     res.send('hello');
// });

router.post('/register',register);


// router.post('/register',(req,res)=>{
//     register(req, res);
// });



export default router;