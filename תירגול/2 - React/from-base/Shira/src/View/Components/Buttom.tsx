import React from "react";

interface ButtomProps {
  setNumber: Function;
}
const Buttom = ({ setNumber }: ButtomProps) => {
  return <button onClick={() => setNumber(6)}>Chenge Num</button>;
};

export default Buttom;
