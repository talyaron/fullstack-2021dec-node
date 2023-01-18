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
        let { username, email, password } = req.body;
        
        // User validation

        await User.create({ username, email, password }, function (err, result) {
          if (err) {
            res.status(400).send({ error:"Error inserting user!"});
          } else {
            res.status(204).send({ ok: true, result});
          }
        });

    } catch (err) {
        //TODO send error
        console.log(err);
        res.status(500).send({ error: err });
    }
  }