
import UserValidate from '../models/validationModel';

export let usersValidated: Array<UserValidate> = [];


export const validateSignupForm = (req, res) => {
    const {  userName, email, password } = req.body;
    if (! userName || !email || !password) throw new Error("Details are required!");
  
    let newUser: UserValidate = {
        userName, email, password, in: false
    };
    usersValidated.push(newUser);
    res.send({ usersValidated });
    console.log(usersValidated);
    console.log(newUser);
  };
  
  
  export const validateLoginForm = (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) throw new Error("Details are required!");
  
    res.send({ usersValidated });
    console.log(usersValidated);

  };
  
  