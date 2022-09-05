import React from "react";

interface BackgroundColorProps {
  backgroundColor: string;
}

const Circle = ({ backgroundColor }: BackgroundColorProps) => {
  return (
    <>
      <div>{backgroundColor}</div>
      <div>{backgroundColor}</div>
      <div>{backgroundColor}</div>
      <div>{backgroundColor}</div>
    </>
  );
};

export default Circle;
