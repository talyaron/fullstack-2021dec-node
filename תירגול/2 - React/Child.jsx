import React from "react";

const Child = (props) => {
  console.log(`this is props:` + props);
  const { number } = props;
  return (
    <div>
      <h1>{number}</h1>
      {/* heelo */}
    </div>
  );
};

export default Child;
