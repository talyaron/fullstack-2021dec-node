import express from 'express';
import { getMyProducts } from '../controls/productCont';
import jwt from 'jwt-simple';
const router = express.Router();

router.get('/get-my-products',isAdmin, getMyProducts);

//middlware
function isAdmin(req:any, res:any, next:any){
    try {
        //check if admin

        //decode the cookie, and if it has  role "admin"

        const {user} = req.cookies;
        if(!user) throw new Error('no cookie on path');

        const secret = process.env.JWT_SECRET;
    if(!secret) throw new Error('no secret')
        var decodedCookie = jwt.decode(user, secret);

        console.log(decodedCookie)

        const {role} = decodedCookie;

        if(role !== 'admin'){
            res.status(403).send({error:'Not authorized'})
        } else{
            next()
        }

      


        //if not return 403

    } catch (error) {
        res.send({error:error.message})
    }
}


export default router