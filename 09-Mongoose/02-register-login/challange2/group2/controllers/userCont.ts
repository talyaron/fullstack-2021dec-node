// import UserModel, {UserValidation} from "../models/models";

// export async function pushUser(req, res) {
//     try {
//         const {name,age,url} = req.body;
//         const { error } = UserValidation.validate({ name,age,url });
//     if (error) throw error;

//     const user = await UserModel.findOne({ name,age,url });
//     if (!user) {
//       res.send({ login: false });
//     } else {
//       res.send({ login: true });
//     }

//     } catch (error) {
//       res.send({ error: error.message });
//     }
//   }


