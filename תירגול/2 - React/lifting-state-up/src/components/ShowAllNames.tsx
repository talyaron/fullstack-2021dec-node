import React from "react";

interface ShowNameProps {
  name: string;
}

const ShowAllNames = ({ name }: ShowNameProps) => {
  return <div>{name}</div>;
};

export default ShowAllNames;
