import { ProductModel } from "./productsModel";

export async function addProduct(req:any, res:any) {
    try {
        const {title,price,imageSrc,publish} = req.body;

        const product = new ProductModel({title,imageSrc,price,publish})
        await product.save();
        res.send({ok:true, message: 'new product added'})
   
    } catch (error) {
        console.error(error)
        res.status(500).send({error:error.meesag})
    }
}

export async function getProduct(req:any, res:any){
    try {
        const productsDB:any[] = await ProductModel.find({publish:true});

        res.send({ok:true,
            message: `${productsDB.length} product retrived`,
            products: productsDB,
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.meesag})
    }
}

export async function deleteProduct(req:any, res:any){
    try {
        const {productID} = req.body;
        console.log(productID);

        if(productID){
            const productDB = await ProductModel.deleteOne({_id:productID})
            res.send({
                seccess:true, product:productDB , 
                message:'Prodect Deleted'
            })
        }
        

    } catch (error) {
        console.error(error);
        res.status(500).send({error:error.meesag})
    }
}


export const updatePrice =async (req:any , res:any) => {
    try {
        const {productID, price} = req.body;
        if(productID && price){
            const product = await ProductModel.updateOne({_id:productID, price:price})
            res.send({
                seccess:true, product , 
                message:'Prodect updated'
                
            })
            console.log(product);
            
        }
        else{
            throw new Error ('ProductID is missing')
        }

    } catch (error) {
       console.error(error)
       res.status(500).send({error:error.meesag})
    }
}


export const updateCard = async (req: any, res: any) => {
    try {
      const { title, img, price, published, productID } = req.body;
  
      if(productID || title || img || price || published) {
        const product = await ProductModel.findOneAndUpdate({ title, img, price, published, _id: productID});
  
        res.send({ success: true, product, message: 'Product card updated '})
        console.log(product);
  
      } else {
        throw new Error("ProductID is missing");
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  