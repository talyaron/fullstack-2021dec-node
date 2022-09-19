import { useState } from "react";
import { products } from "./data/products";
import Buttom from "./View/Components/Buttom";
import ProductComponent from "./View/Components/Product";

function App() {
  const [number, setNumber] = useState<number>(3);

  return (
    <div className="App">
      <div>{number}</div>
      <h1>Products</h1>
      <div>
        {products.map((item, index) => (
          <ProductComponent item={item} index={index} setNumber={setNumber} />
        ))}
      </div>
      <Buttom setNumber={setNumber} />
    </div>
  );
}

export default App;
