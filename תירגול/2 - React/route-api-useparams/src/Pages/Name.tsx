import React from "react";
import { useParams } from "react-router-dom";

const Name = () => {
  console.log(useParams());
  return <div>Name</div>;
};

export default Name;
