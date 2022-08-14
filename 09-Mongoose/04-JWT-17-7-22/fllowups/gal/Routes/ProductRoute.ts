import express from 'express';
import { getMyProducts } from '../Conts/ProductCont';
import jwt from 'jwt-simple';
const router = express.Router();

router.get('/get-my-products', getMyProducts, isAdmin)


function isAdmin(req:any, res:any, next:any){
    try {
        
        const {user} = req.cookies;
        if(!user) throw new Error('no cookie on path');

        const secret = process.env.JWT_SECRET;

        if (!secret) throw new Error ('no secred code')
        const decodedCookie = jwt.decode(user, secret);
        console.log(decodedCookie)

        const {role} = decodedCookie;

        if(role !== 'admin'){
            res.status(403).send({error:'Not authorized'})
        } else{
            next()
        }

    } catch (error) {
        res.send({error:error.message})
    }
}


export default router