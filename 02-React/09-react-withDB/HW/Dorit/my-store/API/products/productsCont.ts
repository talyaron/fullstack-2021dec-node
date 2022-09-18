import Products from "../../client/src/features/products/Products";
import { ProductModel } from "./productsModel";

export async function addProduct(req: any, res: any) {
  try {
    const { imgSrc, price, title, publish } = req.body;

    const product = new ProductModel({ imgSrc, price, title, publish });
    await product.save();
    res.send({ ok: true, meesage: "product added" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function getProducts(req: any, res: any) {
  try {
   

    const productsDB:any[] = await ProductModel.find({publish:true });
   
    res.send({ ok: true, meesage: `${productsDB.length} product retrived`, products:productsDB});
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function getProduct(req: any, res: any) {
  try {
    const { title} = req.body;

    const product = await ProductModel.find({title})
    res.send({ ok: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export const deleteproduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (productId) {
      const products = await ProductModel.deleteOne({_id:productId})
      res.send({ ok: true, products });
    } else {
      throw new Error("productID is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}



