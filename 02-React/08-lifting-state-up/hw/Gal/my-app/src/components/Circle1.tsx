import { useState } from "react";

interface BackgroundColorProps {
  changeBackgroundColor1: Function;
  backgroundColor1: string;
}

const Circle1 = ({ changeBackgroundColor1,backgroundColor1}: BackgroundColorProps) => {
    const [changecolor, setChangeColor] = useState(false)

  function handleClick() {
    changeBackgroundColor1();
    setChangeColor(!changecolor);
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: `${(changecolor === true)? backgroundColor1: backgroundColor1}`}}
        onClick={handleClick}
      >
        {backgroundColor1}
      </div>
    </div>
  );
};

export default Circle1;
