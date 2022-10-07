import { useState } from "react";
import { Product } from "../../data/products";

interface ProductProps {
  item: Product;
  index: number;
  setNumber: Function;
}

const ProductComponent = ({ item, index, setNumber }: ProductProps) => {
  const [colorUser, setColorUser] = useState<string>("red");

  function changeColorMine(colorMine: string) {
    setColorUser(colorMine);
  }

  function changeColorBlue() {
    setColorUser("blue");
  }

  return (
    <div key={index} className="productItem" style={{ color: colorUser }}>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button onClick={() => changeColorMine("green")}>
        Change me to anything!!!
      </button>
      <button onClick={changeColorBlue}>Change me to blue!!!</button>

      <button onClick={() => setNumber(Math.round(Math.random() * 10))}>
        Change number
      </button>
    </div>
  );
};

export default ProductComponent;
