// import uid from "./helpers";
import UserModel, {UserVal} from "../models/userModel";


// export let users: Array<any> = [];


export const handleDeleteUser = (req, res) => {
  try {
    // const { userId } = req.body;
    // console.log("userId", userId);

    // const index: number = users.findIndex((user) => user.userId === userId);
    // if (index === -1) throw new Error("user not found");

    // users = users.filter((user) => user.userId !== userId);
    // console.log("users", users);
    // res.send({users});
  } catch (error) {
    res.send({ error: error.message });
  }
};


export async function handleAddUser(req, res) {
  try {
    const {name} = req.body;
    const {error} = UserVal.validate({name});
    if (error) 
    throw error;
  
    //save to DB;
    const user = new UserModel({ name });
    await user.save();
    // users.push(user);
    res.send({user});
    
  } catch (error) {
    res.send({error: error});
  }
};


export const updateUser = async (req, res) => {
  try {
    // const { userId, newName } = req.body;
    // const index = users.findIndex(object => {return object.userId === String(userId)})
    // users[index].name = newName
    
    // const newUserName = new UserModel({ newName, userId: uid() });
    // await newUserName.save();
    
    // res.send({ newUserName });
    // console.log(newUserName);

  } catch (error) {
    res.send({ error: error.message });
  }
};

