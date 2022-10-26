import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Products {
  item: string;
  price: number;
  _id: string;
}

const MainPage = () => {
  const [products, setProducts] = useState<Array<Products>>([]);

  async function addProduct(ev: any) {
    ev.preventDefault();
    const item = ev.target.elements.itemName.value;
    const price = ev.target.elements.price.value;

    const { data } = await axios.post("/product/add-new-product", {
      item,
      price,
    });

    console.log(data);
  }

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/product/get-data");
      setProducts(data);
      console.log(data);
    }

    getData();
  }, []);

  return (
    <div>
      <form onSubmit={addProduct}>
        <input type="text" name="itemName" placeholder="name of item" />
        <input type="number" name="price" placeholder="price of item" />
        <button type="submit">Add</button>
      </form>

      <div>
        {products.map((pr) => (
          <Link to={pr._id} key={pr._id}>
            <p>{pr.item}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
