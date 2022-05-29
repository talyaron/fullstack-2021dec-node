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

export const deleteUser =  (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) throw new Error("userId is required");

    users = users.filter(user => user.id !== userId);
    console.log(users)
    res.send({ users });

  } catch (error) {
    res.send({ error: error.message });
  }
};
