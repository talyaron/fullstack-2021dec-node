import UserModel, { UserValidation } from "../models/userModel";
export async function register(req, res){
  console.debug("async function register")
    try {
        const { name, email, password } = req.body;
        console.debug("got to here")
        //console.debug(name,email,password)
        const { error } = UserValidation.validate({ name, email, password });
        if (error) throw error;
    
        //save to DB;
        const user = new UserModel({ name, email, password });
        await user.save();
        console.debug(user)
        res.send({ register: true });
      } catch (error) {
        res.send({ error: error.message });
      }
}

export async function login(req, res){
    try {
        const {name, email, password} = req.body;
        console.debug({name,email,password})
        const{error} = UserValidation.validate({name,email,password});
        if (error) throw error;
        const user = await UserModel.findOne({ name,email,password })
       
        console.debug(`user:${user}`)
        if (!user) {
          res.send({ login: false });
        } else {
          console.debug("we are sending true")
          res.send({ login: true });
        }
 
    } catch (error) {
       console.error(error) 
    }

}