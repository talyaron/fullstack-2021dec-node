import UserModel, {UserValidation} from '../model/userModel';

export async function register(req, res){
    try {
        const {name, email, password} = req.body;
        const {error} = UserValidation.validate({name, email, password})
        if(error) throw error
        const user = new UserModel({name, email, password})
        await user.save();
        res.send({ register: true })
        
    } catch (error) {
        res.send({error:error.message})
        
    }
    
}

export async function login(req, res){
    try {
        const {name, email, password} = req.body;

        const user = await UserModel.findOne({name, email, password});
        if(!user) {
            res.send({login: false})
        }   else{
            res.send({login: true})
           } 

        
    } catch (error) {
        res.send({error:error.message})
    }
}