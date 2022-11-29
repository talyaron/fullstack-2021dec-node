import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Add = () => {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setApartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 

  const handleAddApartment = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/apartments", apartment);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Add New Apartment</h1>
      <form onSubmit={handleAddApartment}>
        {/* <
        /> */}
        {/* <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="description"
        /> */}

  
        <button type="submit">Add an apartment</button>
      </form>
    </>
  );
};