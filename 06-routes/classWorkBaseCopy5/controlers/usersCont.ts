import User from "../model/usersModel";


export async function getAllUsers(res, req) {
    try {

        const users = await User.find({})
        res.send({ ok: true, users });
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}

export const someFunction = (y)=>{return y*2};