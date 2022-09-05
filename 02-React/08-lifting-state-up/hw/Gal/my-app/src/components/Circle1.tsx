import { useState } from "react";

interface BackgroundColorProps {
  changeBackgroundColor1: Function;
  backgroundColor1: string;
  backgroundColor: string;
}

const Circle1 = ({ changeBackgroundColor1,backgroundColor1,backgroundColor}: BackgroundColorProps) => {
    const [changecolor, setChangeColor] = useState(false)

  function handleClick() {
    changeBackgroundColor1();
    setChangeColor(!changecolor);
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: `${(changecolor === true)? backgroundColor1: backgroundColor }` }}
        onClick={handleClick}
      >
        {backgroundColor1}
      </div>
    </div>
  );
};

export default Circle1;
