import { useState } from "react";

interface BackgroundColorProps {
  changeBackgroundColor2: Function;
  backgroundColor2: string;
}

const Circle2 = ({
  changeBackgroundColor2,backgroundColor2}: BackgroundColorProps) => {
    const [changecolor, setChangeColor] = useState(false)

  function handleClick() {
    changeBackgroundColor2();
    setChangeColor(!changecolor);
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: ` ${(changecolor === true)? backgroundColor2: backgroundColor2 }` }}
        onClick={handleClick}
      >
        {backgroundColor2}
      </div>
    </div>
  );
};

export default Circle2;