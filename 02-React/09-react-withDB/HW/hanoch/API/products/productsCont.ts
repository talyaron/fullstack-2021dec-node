import { ProductModel } from "./productsModel";

export async function addProduct(req, res){
    try {
        const {title, price, imgSrc, publish} = req.body;
        const product = new ProductModel({title, price, imgSrc, publish});
        await product.save();
        res.send({ok:true, massage:"product added"})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

export  const  getProduct = async (req, res) => {
    try {
        const productDB:any[] = await ProductModel.find({publish:true});
        res.send({message: `${productDB.length} product retrieved` ,productDB})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.body;
       await ProductModel.deleteOne({_id:id})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}