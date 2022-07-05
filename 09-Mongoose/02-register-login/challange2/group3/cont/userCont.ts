import UserModel , {UserValidation} from "../models/UserModel";

export const handleRegister = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = UserValidation.validate({ email, password });
        if (error) throw error;

        const user = new UserModel({email, password});
        const result = await user.save();

        res.send({ok: true, result})
        console.log(result);

    } catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export const handleLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const {error} = UserValidation.validate({email, password});

        const user = await UserModel.findOne({email, password});
        if(!user) {
            res.send({login: false});

        } else {
            res.send({login: true, user});
        }

        console.log('Just logged in', user);

    } catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
}

export const profileEdit = async (req, res) =>{
    try {
        
    } catch (error) {
        res.send({error: error.message})
    }
}