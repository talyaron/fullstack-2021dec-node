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

export async function handleDelete(req, res){
  const {appoId}= req.body;
  console.log(appoId,"1")

  const AppoDB= await ProductModel.findByIdAndRemove( {_id:appoId} )
  console.log(AppoDB)
  if(!AppoDB)throw new Error("couldn't be found");

  res.send(AppoDB)
}
