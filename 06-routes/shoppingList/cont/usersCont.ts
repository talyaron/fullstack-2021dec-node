import User from "../model/userModel";

export const getAllUsers=(req, res)=> {
    try {

        const users = await User.find({})
        res.send({ ok: true, users });
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}



export const addUser = async (req, res) => {
    try {
        let { username, password } = req.body;

        const newUser = new User({ username, password });
        const result = await newUser.save();

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
      const { userId } = req.body;
      console.log(userId)
      if (userId) {
        const users = await User.deleteOne({_id:userId})
        res.send({ ok: true, users });
      } else {
        throw new Error("userId or role is missing");
      }
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }