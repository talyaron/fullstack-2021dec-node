import { ProductModel } from "./productsModel";

export async function addProduct(req, res){
    try {
        const {title, price, imgSrc, publish} = req.body;
        console.log(title, price, imgSrc, publish);
        
        const product = new ProductModel({title, price, imgSrc, publish});
        console.log(product)
        await product.save();
        res.send({ok:true, massage:"product added"})
    } catch (error) {
        res.status(500).send({error: error.message})
        console.log(error)
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
        const {id} = req.body;
        
        
       await ProductModel.deleteOne({_id:id})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

export async function updateProduct(req, res) {
    try {
        const {id, title, price, imgSrc} = req.body;
        const product = ProductModel.findByIdAndUpdate({_id:id}, {title, price, imgSrc}, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        });
       

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}