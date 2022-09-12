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
    const productsDB: any[] = await ProductModel.find({ publish: true });

    res.send({
      ok: true,
      meesage: `${productsDB.length} product retrived`,
      products: productsDB,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

// export const deleteProduct = async (req: any, res: any) => {
//   try {
//     const { productID } = req.body;
//     console.log(productID);

//     if (productID) {
//       const productDB = await ProductModel.deleteOne({ _id: productID });
//       res.send({
//         success: true,
//         product: productDB,
//         message: "Product deleted successfully",
//       });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };

// export const updatePrice = async (req: any, res: any) => {
//   try {
//     const {productID, price} = req.body;
//     if (productID && price) {

//       const product = await ProductModel.updateOne({ _id: productID, price: price });
//       res.send({ success: true, product, message: "Product updated successfully"})

//       console.log(product);
//     } else {
//       throw new Error("ProductID is missing")
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };

// export const updateCard = async (req: any, res: any) => {
//   try {
//     const { title, img, price, published, productID } = req.body;

//     if(productID || title || img || price || published) {
//       const product = await ProductModel.findOneAndUpdate({ title, img, price, published, _id: productID});

//       res.send({ success: true, product, message: 'Product Card updated successfully'})
//       console.log(product);

//     } else {
//       throw new Error("ProductID is missing");
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };
