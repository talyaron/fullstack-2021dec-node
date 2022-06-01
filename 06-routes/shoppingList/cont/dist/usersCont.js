"use strict";
exports.__esModule = true;
exports.getUsers = void 0;
var users = [{ name: "avi", userId: "241" }];
exports.getUsers = function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
};
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
