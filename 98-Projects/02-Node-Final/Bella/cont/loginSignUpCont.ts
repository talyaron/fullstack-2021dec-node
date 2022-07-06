import {UserValidModel, UserValidation} from "../models/userModel";

export async function handleRegister(req, res) {

    try {
        const {email, password} = req.body;
        const {error} = UserValidation.validate({email, password});
        if (error) 
            throw error;
        
        //save to DB;
        const user = new UserValidModel({email, password});
        await user.save();

        res.send({register: true});
        console.log(user);

    } catch (error) {
        res.send({error: error});
    }
};

export async function handleLogin(req, res) {
    try {
      const {email, password} = req.body;
      const {error} = UserValidation.validate({email, password});
      if (error) 
          throw error;
      
      const user = await UserValidModel.findOne({email, password});
      if (!user) {
          res.send({in: false})
      } else {
          res.send({in: true})
      }
      console.log(user);
      
    } catch (error) {
      res.send({ error: error.message });
    }
};


