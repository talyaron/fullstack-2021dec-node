import React from "react";

interface ColoredProps {
  color: string;
  size: number;
}

const Colored = ({ color, size }: ColoredProps) => {
  return (
    <div
      className="colored"
      style={{ backgroundColor: `#${color}`, width: `${size}px` }}
    >
      {color}
    </div>
  );
};

export default Colored;
