import { useState } from "react";

interface BackgroundColorProps {
  changeBackgroundColor4: Function;
  backgroundColor4: string;
}

const Circle4 = ({
  changeBackgroundColor4,backgroundColor4}: BackgroundColorProps) => {
    const [changecolor, setChangeColor] = useState(false)

  function handleClick() {
    changeBackgroundColor4();
    setChangeColor(!changecolor);
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: `${(changecolor === true)? backgroundColor4: backgroundColor4}` }}
        onClick={handleClick}
      >
        {backgroundColor4}
      </div>
    </div>
  );
};

export default Circle4;