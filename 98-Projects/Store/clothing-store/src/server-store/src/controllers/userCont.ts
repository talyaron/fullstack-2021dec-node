import User from '../models/userModel'


// export const login = async (req:any, res:any) => {
    
//     let { email, password } = req.body;
    
    
//     const user = await User.findOne({ "email" : email });
//     console.log(user);
//     if (user) {
//       res.cookie('user', user._id);
//       res.send({ ok: true, user });
//     } else {
//       throw new Error("user not found");
//     }
 
//   }

export const login = async (req:any, res:any) => {
    try {
        let { email, password } = req.body;
        
        const user = await User.findOne({ "email": email });
        
        if (user) {
          if (user.password !== password){
                res.status(401).send({"msg": "Incorrect password" })
          }
          else{
                // user logged in 
                res.status(200).send({ ok: true, user });
          }
      
        } else {
          res.status(404).send({ error: "user not found" });
        }
    } catch (err) {
        //TODO send error
        console.log(err);
        res.status(500).send({ error: err });
    }
  }


  export const register = async (req:any, res:any) => {
    try {
        var passwordValidator = require('password-validator');
        var validator = require('validator');
        let schema = new passwordValidator();
        let { username, email, password } = req.body;
        
        schema.is().min(7).is().max(30).has().uppercase()
        .has().lowercase().has().not().spaces()

        if (!validator.matches(username, "^[a-zA-Z0-9_\.\-]*$")) {
          return res.status(400).send({ error:"Invalid user name format"});
        }

        if(!schema.validate(password)){ 
          return res.status(400).send({ error:"Invalid password format"});
        }
        
        const checkUser = await User.findOne({ "email": email });
        
        if (checkUser) {
          res.status(409).send({"msg": `User ${email} already exist` })
        } else {
          await User.create({ username, email, password }, function (err, result) {
            if (err) {
              res.status(400).send({ error:"Error inserting user!"});
            } else {
              res.status(200).send({ ok: true, msg:`User ${email} created`});
            }
          });
        }

    } catch (err) {
        //TODO send error
        console.log(err);
        res.status(500).send({ error: err });
    }
  }