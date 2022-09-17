import { ProductModel } from "./productsModel";

export async function addProduct(req: any, res: any) {
  try {
    const { title, price, img, published } = req.body;
    const product = new ProductModel({ title, price, img, published });
    await product.save();

    res.send({ success: true, message: "Product has been succsesfuly added" });
    console.log(product);

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function getProducts(req: any, res: any) {
  try {
    // getting the right product
    const productsDB: any[] = await ProductModel.find({ published: true });
    // to get the length
    res.send({
      success: true,
      message: `length of: ${productsDB.length}`,
      products: productsDB,
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export const deleteProduct = async (req: any, res: any) => {
  try {
    const { productID } = req.body;
    console.log(productID);

    if (productID) {
      const productDB = await ProductModel.deleteOne({ _id: productID });
      res.send({
        success: true,
        product: productDB,
        message: "Product has been removed",
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updatePrice = async (req: any, res: any) => {
  try {
    const {productID, price} = req.body;
    if (productID && price) {

      const product = await ProductModel.updateOne({ _id: productID, price: price });
      res.send({ success: true, product, message: "Product updated successfully"})

      console.log(product);
    } else {
      throw new Error("ProductID is missing")
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


export const updateCard = async (req: any, res: any) => {
  try {
    const { title, img, price, published, productID } = req.body;

    if(productID || title || img || price || published) {
      const product = await ProductModel.findOneAndUpdate({ title, img, price, published, _id: productID});

      res.send({ success: true, product, message: 'Product Card updated successfully'})
      console.log(product);

    } else {
      throw new Error("ProductID is missing");
    }
         
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
