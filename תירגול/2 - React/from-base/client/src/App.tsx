import { useState } from "react";
import { products } from "./data/products";
import ProductComponent from "./View/Components/Product";

function App() {
  const [number, setNumber] = useState<number>(3);

  return (
    <div className="App">
      <h1>Products</h1>
      <div>
        {products.map((item, index) => (
          <ProductComponent item={item} index={index} setNumber={setNumber} />
        ))}
      </div>
    </div>
  );
}

export default App;
