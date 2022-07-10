
import userModel, {userValidation, userModelEnter} from "../model/userModel";



export  const  handleGetUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const {error} = userValidation.validate({email, password})
        if (error) throw error;
         const user = new userModel({email, password})
         user.save()
         const findUser = await userModel.findOne({email});
         if (findUser) {
            const cookie = findUser._id;
            res.cookie('user', cookie )
            res.send({ok: true, user})
         }
      

    } catch (error) {
        res.send({error})
    }
}

export async function getCookie (req, res){
    try {
        console.log(req.cookie);
        
        const {user} = req.cookie;
        console.log('user', user)

        
        const userDB = await userModel.findById({user})
        console.log(userDB);
        

        
        res.send({ok: true, userDB})
    } catch (error) {
        res.send({error})
        
    }
}

// export async function getCountEntrance(req, res){
//     try {
//         const {email} = req.body
//         const count = userModel.countDocuments({email: email});
//         const entrance = new userModelEnter({email, count});
//         await entrance.save()
//         res.send({count, entrance})
//         console.log(count);
//     } catch (error) {
//         res.send({error})
//     }
// }