async function handleGetProducts() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/products/get-products");
    console.log(data);
    const { products, error } = data;
    if (error) throw new Error(error);
    renderProducts(products);
  } catch (error) {
    console.error(error);
  }
}

async function handleAddProduct(ev: any) {
  try {
    ev.preventDefault();

    const name = ev.target.elements.name.value;
    console.log(name);
    if (!name) throw new Error("Name is missing");
    //@ts-ignore
    const { data } = await axios.post("/products/add-product", { name });
    console.log(data);
    const { products, error } = data;
    if (error) throw new Error(error);
    renderProducts(products);
  } catch (error) {
    console.error(error);
  }
}

async function handleDelete(productId: string) {
  try {
    if (!productId) throw new Error("productId is missing");
    //@ts-ignore
    const { data } = await axios.delete("/products/delete-product", {
      data: { productId },
    });
    const { products, error } = data;
    if (error) throw new Error(error);
    renderProducts(products);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateProduct(ev: any) {
  try {
    const newName = ev.target.value;
    if (!newName) throw new Error("Name is missing");
    const id = ev.target.id;
    if (!id) throw new Error("Id is missing");

     //@ts-ignore
    const { data } = await axios.patch("/products/update-product", {id, newName});
    
    const { products, error } = data;
    if (error) throw new Error(error);
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
      html += `<div class="productCard">
      <input id='${product.id}' type='text' value='${product.name}' onblur='handleUpdateProduct(event)'/> 
      <button onclick='handleDelete("${product.id}")'>DELETE</button>
      </div>`;
    });

    const root = document.querySelector("#root");
    if (!root) throw new Error("No root was captured from DOM");
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
