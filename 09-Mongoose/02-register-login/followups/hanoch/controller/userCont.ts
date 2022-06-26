import UserModel, {UserValidation} from '../model/userModel';

export async function register(req, res){
    try {
        const {name, Email, password} = req.body;
        const {error} = UserValidation.validate({name, Email, password})
        if(error) throw error
        const user = new UserModel({name, Email, password})
        await user.save();
        res.send({ register: true })
        
    } catch (error) {
        res.send({error:error.message})
        
    }
    
}

export async function login(req, res){
    try {
        const {name, Email, password} = req.body;
        const {error} = UserValidation.validate({name, Email, password});
        if (error) throw error;

        const user = await UserModel.findOne({name, Email, password});
        if(!user) {
            res.send({login: false})
        }   else{
            res.send({login: true})
           } 

        
    } catch (error) {
        res.send({error:error.message})
    }
}