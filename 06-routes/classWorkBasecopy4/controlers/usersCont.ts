import User from "../model/usersModel";


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



  export const someFunction = (y)=>{return y*2};