import userModel, { userValidation, userModelEnter } from "../model/userModel";

export const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = userValidation.validate({ email, password });
    if (error) throw error;
    const user = new userModel({ email, password });
    const userDB = await user.save();

    //check if email exists
    //  if dont exists add email and password
    console.log(userDB);
    //  const findUser = await userModel.findOne({email});
    if (userDB) {
      const cookie = userDB._id;
      console.log(cookie);
      res.cookie("user", cookie);
      res.send({ ok: true, user });
    }
  } catch (error) {
    res.send({ error });
  }
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const userDB = await userModel.findOne({ email, password });

    if (!userDB) throw new Error("User or password are incorrect");

    let count: number | undefined = userDB.count;
    if (!count) count = 0;
    count++;

    let datesLoggedIn = userDB.datesLoggedIn || [];

    
    datesLoggedIn.push(new Date());

    await userModel.updateOne({ email }, { count,datesLoggedIn });
    console.log(count)
    res.send({count})
  } catch (error: any) {
    res.send({ error: error.message });
  }
}

export async function getCookie(req, res) {
  try {
    console.log(req.cookie);

    const { user } = req.cookie;
    console.log("user", user);

    const userDB = await userModel.findById({ user });
    console.log(userDB);

    res.send({ ok: true, userDB });
  } catch (error) {
    res.send({ error });
  }
}

// export async function getCountEntrance(req, res){
//     try {
//         const {email} = req.body
//         const count = userModel.countDocuments({email: email});
//         const entrance = new userModelEnter({email, count});
//         await entrance.save()
//         res.send({count, entrance})
//         console.log(count);
//     } catch (error) {
//         res.send({error})
//     }
// }
