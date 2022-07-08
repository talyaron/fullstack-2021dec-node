
import userModel, {userValidation, userModel1} from "../model/userModel";



export async function handleGetCookie(req, res) {
    try {
        const {email, password} = req.body;
        const {error} = userValidation.validate({email, password})
        if (error) throw error;
         const user = new userModel({email, password})
         await user.save()

    } catch (error) {
        res.send({error: error.message})
    }
}