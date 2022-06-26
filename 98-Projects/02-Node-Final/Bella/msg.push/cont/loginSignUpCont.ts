
import uid from "../helpers";
import UserValidate from '../model/userValidateModel';

export let usersValidated: Array<UserValidate> = [];


export const validateSignupForm = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) throw new Error("Details are required!");
  
    let newUser: UserValidate = {
      name, email, password, userID: uid(), in: false
    };
    // newUser.in = true;
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
  
  
  
