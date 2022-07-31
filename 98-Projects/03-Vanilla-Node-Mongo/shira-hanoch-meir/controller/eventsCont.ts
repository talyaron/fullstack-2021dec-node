import {lessonsModel, cartModel, coachModel} from '../model/model';
import jwt from 'jwt-simple';


export async function addEvents(req, res){
    try {
        const { lesson, dateStart, dateEnd, price, coach} = req.body;
        await lessonsModel.create({lesson, dateStart, dateEnd, price, coach});
        res.send({ok: true})
    } catch (error) {
        res.send({error: error.message})
    }
}
export async function eventList(req, res){
    try {
        const events = await lessonsModel.find({});
        res.send(events)
    } catch (error) {
        res.send({error: error.message})
    }
}

export async function addToCart(req, res) {
    try {
        const {id} = req.body;
        const Cart = await lessonsModel.findById({id});
        const lesson = Cart.lesson;
        const dateStart = Cart.dateStart;
        const endDate = Cart.dateEnd;
        const day = Cart.day;
        const price = Cart.price;
        
        const {user} = req.cookies;
         await cartModel.create({lesson,day,dateStart,endDate, price, user});
        res.send({ok: true})

    } catch (error) {
        res.send({error: error.message})
        
    }
}

export async function cartByUser(req, res){
    //check
    try {
        const {user}  = req.cookies;
        // const secret = process.env.JWT_SECRET;
        // var decodedCookie = jwt.decode(user, secret);
        // const {User} = decodedCookie;
        const userCart = await cartModel.find({user});

        res.send(userCart);

    } catch (error) {
        res.send({error: error.message})
        
    }
};

export async function deleteForCoach(req, res){
    try{
        const id = req.body;
        lessonsModel.findById({id}).remove(()=>{
            res.send('deleted successfully!!')
        });
    }catch (error) {
        res.send({error: error.message})
        
    }
};

export async function deleteFromCart(req, res){
    try{
        const id = req.body;
        cartModel.findById({id}).remove(()=>{
            res.send('deleted successfully!!')
        });
    }catch (error) {
        res.send({error: error.message})
        
    }
}
// export async function cartCookie(req, res) {
//     try {
//         const {user} = req.cookies;
//         res.cookie('customer', user)
//     } catch (error) {
//         res.send({error: error.message})
        
//     }
// }