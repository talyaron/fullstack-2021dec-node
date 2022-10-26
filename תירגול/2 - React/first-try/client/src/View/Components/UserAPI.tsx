import React from "react";

interface UserProps {
  name: string;
  phone: string;
  website: string;
}

const UserAPI = ({ name, phone, website }: UserProps) => {
  return (
    <div className="user">
      <p>{name}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserAPI;
