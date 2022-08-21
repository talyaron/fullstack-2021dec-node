import UserModel, { UserValidation } from "../models/userModel";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = await UserModel.findOne({ email, password });
    if (!user) {
      res.send({ login: false });
    } else {
      res.send({ login: true });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    //save to DB;
    const user = new UserModel({ email, password });
    await user.save();

    res.send({ register: true });
  } catch (error) {
    res.send({ error: error.message });
  }
}
