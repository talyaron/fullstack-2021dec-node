import ProductModel from "../Models/ProductModels";

export async function getMyProducts(req, res) {
  try {
    //get user id

    const { user } = req.cookies;

    if (!user) throw new Error("User is missing!!!!!");
    console.log(user);
    const { userId } = user;
    const productsDB = await ProductModel.find({ ownerId: userId });

    res.send({ ok: true, products: productsDB });
  } catch (error) {
    res.send({ error: error.message });
  }
}
