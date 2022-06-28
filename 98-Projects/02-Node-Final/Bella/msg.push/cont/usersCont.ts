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
    if (error) throw error;
  
    //save to DB;
    const user = new UserModel({ name });
    await user.save();
    
    const userId = UserModel.find( { user: user._id})
    .then(docs=>console.log(docs)).catch(err=>console.log(err.message));
    console.log(user._id);

    res.send({user});
    
  } catch (error) {
    res.send({error: error});
  }
};


export async function updateUser(req, res) {
  try {
    const { newName } = req.body;
    const userId = UserModel.find( { name: newName._id})
    .then(docs=>console.log(docs)).catch(err=>console.log(err.message));

    // const index = users.findIndex(object => {return object.userId === String(userId)})
    // users[index].name = newName
    
    const newUserName = new UserModel({ newName, userId });
    await newUserName.save();
    
    res.send({ newUserName });

  } catch (error) {
    res.send({ error: error.message });
  }
};





