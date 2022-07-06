import {UserModel} from "../models/userModel";

// export const handleDeleteUser = (req, res) => {
//     try {
//         const {userId} = req.body;
//         console.log("userId", userId);

//         const index : number = users.findIndex((user) => user.userId === userId);
//         if (index === -1) 
//             throw new Error("user not found");
        
//         users = users.filter((user) => user.userId !== userId);
//         console.log("users", users);
//         res.send({users});
//     } catch (error) {
//         res.send({error: error.message});
//     }
// };


export async function handleDeleteUser(req, res) {
  try {
      const {name} = req.body;
      if (!name) 
          throw new Error("name is required");
      
      const user = await UserModel.findOneAndDelete({name});
      if (!name) {
          res.send({in: false})
      } else {
          await user.delete();
      }
      console.log(user);

  } catch (error) {
      res.send({error: error.message});
  }
};

export async function handleAddUser(req, res) {
    const {name} = req.body;
    if (!name) 
        throw new Error("name is required");
    
    const user = await UserModel.create({name});
    await user.save();

    res.send({userAdded: true});
    console.log(user);
};

export async function updateUser(req, res) {
    try {
        const {name} = req.body;
        if (!name) 
            throw new Error("name is required");
        
        const newName = await UserModel.findOneAndUpdate({name});
        if (!name) {
            res.send({in: false})
        } else {
            await newName.save();
        }
        console.log(newName);

    } catch (error) {
        res.send({error: error.message});
    }
};

// export const updateUser = async(req, res) => {
//     try {
//         const {userId, newName} = req.body;
//         const index = users.findIndex(object => {
//             return object.userId === String(userId)
//         })
//         users[index].name = newName

//         res.send({users});

//     } catch (error) {
//         res.send({error: error.message});
//     }
// };

export async function getUser(req, res) {
    try {
        const { name } = req.query;
        console.log(name)
        if (!name) 
            throw new Error("missing userId in query");
        
      const userDB = await UserModel.findOne(name);
      console.log(`my name is ${name}`)


        if (!userDB) 
            throw new Error(`coundt find use with this id: ${name}`);
        
        res.send({user: userDB, success: true});

    } catch (error) {
        console.error(error);
        res.send({eror: error.message});
    }
}
