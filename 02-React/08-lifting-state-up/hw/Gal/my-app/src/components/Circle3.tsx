import { useState } from "react";
import '../App.css';
interface BackgroundColorProps {
  changeBackgroundColor3: Function;
  backgroundColor3: string;
  backgroundColor: string;
}

const Circle3 = ({changeBackgroundColor3,backgroundColor3,backgroundColor}: BackgroundColorProps) => {
  const [changecolor, setChangeColor] = useState(false)

  function handleClick() {
    changeBackgroundColor3();
    setChangeColor(!changecolor);
  }

  return (
   
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: `${(changecolor === true)? backgroundColor3: backgroundColor }` }}
        onClick={handleClick}
      >
        {backgroundColor3}
      </div>
    </div>
  );
};

export default Circle3;