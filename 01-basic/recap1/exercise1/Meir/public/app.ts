// async function handleNewProduct(ev: any) {
//     try {
//        //@ts-ignore 
//        const {data} =await axios.get("/products/get-products")
//        console.log(data);
//        const { products, error} = data;
//        if (error) throw new Error(error);
//        renderProducts(products);
//     } catch (error) {
//       console.error(error);
//     }
// }

// interface Product {
//     id: string;
//     name: string;
// }
  
// function renderProducts(products: Array<Product>): void {
//     try {
//       let html = "";
//       products.forEach((product) => {
//         html += `<div class="productCard">
//         <input id='${product.id}' type='text' value='${product.name}' onblur='handleUpdateProduct(event)'/> 
//         <button onclick='handleDelete("${product.id}")'>DELETE</button>
//         </div>`;
//       });
  
//       const root = document.querySelector("#root");
//       if (!root) throw new Error("No root was captured from DOM");
//       root.innerHTML = html;
//     } catch (error) {
//       console.error(error);
//     }
// }