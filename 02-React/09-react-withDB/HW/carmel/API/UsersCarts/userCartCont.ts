import { ProductsModel } from "../Products/productModel"
import { UserCartsModel } from "./userCartModel"

export async function addProductToCart(req:any, res:any) {
    try {
        const { productId } = req.body
        const addedProduct = await ProductsModel.find({_id: productId})
        // if (addedProduct === null){
        //     const newUserCart = new UserCartsModel({title, price, img, description})
        //     await newProduct.save()
        // }
        res.send (addedProduct)
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
    
}