import React from "react";

interface SetNameProps {
  setName: Function;
}

const SetAllNames = ({ setName }: SetNameProps) => {
  const getName = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>SetAllNames</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={getName}
      />
    </div>
  );
};

export default SetAllNames;
