import {User} from "../model/userModel";

let users:Array<User>=[{name:"avi",userId:"241"}]

export const getUsers=(req, res)=> {
    try {
      
        res.send({ ok: true, users });
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}




// export const addUser = async (req, res) => {
//     try {
//         let { username, password } = req.body;

//         const newUser = new User({ username, password });
//         const result = await newUser.save();

//         res.send({ result });
//     } catch (error) {
//         console.error(error);
//         res.send({ error: error.message });
//     }
// }

// export const deleteUser =  (req, res) => {
//   try {
//     const { userId } = req.body;
//     if (!userId) throw new Error("userId is required");

//      const usersDel = users.filter(user => user.id !== userId);
//     console.log(usersDel)
//     res.send({ usersDel });

//   } catch (error) {
//     res.send({ error: error.message });
//   }
// };
