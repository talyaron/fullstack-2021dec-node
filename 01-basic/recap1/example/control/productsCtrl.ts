import uid from "./helpers";

interface Product {
  id: string;
  name: string;
}
let products: Array<Product> = [{ id: "ettreyer", name: "test" }];

export function getProducts(req, res) {
  try {
    res.send({ products });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export function addProduct(req, res) {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Name of product is requires");
    
    const id = uid();
    if (!id) throw new Error("Id is missing");

    products.push({ name, id });
    res.send({products})
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }

}

export function deleteProduct(req, res){
    try {
        const {productId} = req.body;
        if (!productId) throw new Error("productId is missing");

        products = products.filter(product=>product.id !== productId);

        res.send({products});
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}


export function updateProduct(req, res){
    try {
        const {id, newName} = req.body;
        if(!id) throw new Error('Id is missing');
        if(!newName) throw new Error('newName is missing');

        const index = products.findIndex(product=>product.id === id);

        if(index === -1) throw new Error (`Couldnt find product wiht id ${id} in products`)


        products[index].name = newName;

        res.send({products})

    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
