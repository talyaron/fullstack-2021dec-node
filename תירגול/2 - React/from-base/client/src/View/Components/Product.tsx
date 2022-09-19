import { useState } from "react";
import { Product } from "../../data/products";

interface ProductProps {
  item: Product;
  index: number;
  setNumber: Function;
}

const ProductComponent = ({ item, index, setNumber }: ProductProps) => {
  const [colorUser, setColorUser] = useState<string>("red");
  let [quantity, setQuantity] = useState<number>(item.quantity);
  let [productName, setProductName] = useState<string>(item.name);


  function changeColorMine(colorMine: string) {
    setColorUser(colorMine);
  }

  function changeColorBlue() {
    setColorUser("blue");
  }
  
  function addQuantity() {
    setQuantity(++quantity);
  }
  
  function minusQuantity() {
    setQuantity(--quantity);
  }
  
  // function changeName() {
  //   letproductNames = 
  // }


  return (
    <div key={index} className="productItem" style={{ color: colorUser }}>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{quantity}</p>
      {/* <input type="text" onBlur={changeName} /> */}
      <button onClick={() => changeColorMine("green")}>
        Change me to anything!!!
      </button>
      <button onClick={changeColorBlue}>Change me to blue!!!</button>

      <button onClick={addQuantity}>
        Add
      </button>
      
      <button onClick={minusQuantity}>
        Delete
      </button>
    </div>
  );
};

export default ProductComponent;
