import React from "react";

interface ShowFormInfoProps {
  name: string;
  createNewColor: Function;
  createNewSize: Function;
}

const ShowFormInfo = ({
  name,
  createNewColor,
  createNewSize,
}: ShowFormInfoProps) => {
  function handleClick() {
    createNewColor();
  }

  return (
    <div>
      <h2>"{name}"</h2>
      <button onClick={handleClick}>Create new Color</button>
      <button onClick={() => createNewSize()}>Create new Size</button>
    </div>
  );
};

export default ShowFormInfo;
