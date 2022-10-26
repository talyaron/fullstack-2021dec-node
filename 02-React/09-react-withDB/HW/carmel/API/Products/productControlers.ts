import { ProductsModel } from "./productModel"

export async function addProduct(req:any, res:any) {
    try {
        const { _id, title, price, img, description } = req.body
        const newProduct = new ProductsModel({title, price, img, description})
        await newProduct.save()
        res.send ({newProduct})
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
    
}
export async function  getProducts(req:any, res:any) {
    try {
        const allProducts:any[]= await ProductsModel.find({})
        res.send({ok:true, message:`${allProducts.length}`, data:allProducts })
    } catch (error) { 
        console.error(error);
        res.status(500).send({ error: error.message });
        
    }
}

export async function deleteProduct(req:any, res:any) {
    try {
        const {_id} = req.body
        ProductsModel.deleteOne({_id:_id})
        res.send({message:`product deleted`})
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updateProduct(req:any, res:any) {
    try {
        const { _id, title, price, img, description } = req.body
        const existingProduct = await ProductsModel.find({_id:_id})
        ProductsModel.updateOne({_id:_id},{
                $set:{
                    title:title,
                    price:price,
                    img:img,
                    description:description
                }
            })
        res.send({existingProduct})
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}