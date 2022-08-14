import ItemModel from "../models/ItemModel";
import jwt from "jwt-simple";

const picture1 = new ItemModel({
  title: "A Girl",
  year: "1980",
  url: "https://images.saatchiart.com/saatchi/419093/art/4053254/3123107-HSC00001-7.jpg  ",
  ownerId: "userId",
});

// picture1.save();
console.log(picture1);

export const getItems = async (req, res) => {
  try {
    const { user } = req.cookies;
    if (!user) throw new Error("The user not found");
    console.log(user);
    const { userId } = user;

    const itemDB = await ItemModel.find({ ownerId: userId });

    res.send({ success: true, user, item: itemDB });
    console.log(itemDB);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const addItem = async (req, res) => {
  try {
    const { title, year, url } = req.body;
    const { user } = req.cookies;

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(user, secret);
    console.log(decodedCookie);
    //  const { userId } = user;
    const { userId } = decodedCookie;

    const itemDB = new ItemModel({ title, year, url, ownerId: userId });
    await itemDB.save();

    if (!user) throw new Error("The user not found");
    console.log(user);

    res.send({ success: true, item: itemDB });
    console.log("from addItem:", itemDB);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
