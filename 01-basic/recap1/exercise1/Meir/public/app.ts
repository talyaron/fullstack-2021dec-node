interface Product {
   id: string;
   name: string;
}
 
async function handleGetProduct(){
   try {
     const products = await getProducts();
     if (products) {
       renderProducts(products);
     }
   } catch (error) {
     console.error(error);
   }
}

async function getProducts(): Promise<Array<Product> | false> {
   try {
       
      //@ts-ignore 
      const {data} =await axios.get("/products/get-products")
      console.log(data);
      const {products, error} = data;
      if(error) throw new Error(error);
      return products;
      
    }catch (error) {
      console.error(error);
    } 
}

async function handleAddProduct(ev:any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value;
        console.log(name);
        if(!name) throw new Error("Name is misssing");
        //@ts-ignore
        const {data} = await axios.post("/products/add-product", {name})
        console.log(data)
        const {products, error} = data;
        if(error) throw new Error(error);
        renderProducts(products);
    } catch (error) {
       console.error(error); 
    }
}

async function handleDelete(productId:string) {
   try {
      if(!productId) throw new Error("productId is misssing");
      //@ts-ignore
      const {data} = await axios.delete("/products/delete-products", {data:{productId}});
      const {products, error} = data;
      if(error) throw new Error(error);
      renderProducts(products);
   } catch (error) {
      console.error(error);
   }
}

interface Product {
  id: string;
  name: string;
}
  
function renderProducts(products: Array<Product>): void {
      try {
        let html = "";
        products.forEach((product) => {
          html += `<div class="productCard">${product.name}<button onclick='handleDelete("${product.id}")'>DELETE</button></div>`;
        });
  
        const root = document.querySelector("#root");
       if (!root) throw new Error("No root was captured from DOM");
       root.innerHTML = html;
     } catch (error) {
       console.error(error);
     }
}