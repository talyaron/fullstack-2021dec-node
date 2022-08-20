import User from "../model/usersModel";

export async function getAllUsers(req, res) {
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

export const updateUser = async (req, res) => {
    try {
      const { userId, role } = req.body;
      if (userId && role) {
        const users = await User.updateOne({_id:userId},{role: role})
        res.send({ ok: true, users });
      } else {
        throw new Error("userId or role is missing");
      }
    } catch (error) {
      console.log(error.error);
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

  export const login = async (req:any, res:any) => {
    try {
      let { username, password } = req.body;
    
      const user = await User.findOne({ username, password });
     
      if (user) {
        res.cookie('user', user._id);
        res.send({ ok: true, user });
      } else {
        throw new Error("user not found");
      }
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }

  export const getUserByCookie = async (req, res)=>{
    try {
      const {user} = req.cookies;
      console.log('user', user)

      if (!user) {
        throw new Error("user not found");
      }

      const userDB = await User.findById(user);
      console.log('userDB', userDB)

      if(!userDB) throw new Error("user not found in DB")

      res.send({ok:true, user:userDB})
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }

  export const someFunction = (y)=>{return y*2};