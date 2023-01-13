import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const apartmentId = location.pathname.split("/")[2];


  const [apartment, setApartment] = useState({
    city: "",
    address: "",
    size: null,
    rooms: null,
    price: null,
    cover: "",
  });

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setApartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleAddApartment = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("http://localhost:4000/apartments/" + apartmentId, apartment);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Update the Apartment</h2>
  
      <form onSubmit={handleAddApartment}>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          placeholder="city"
        />
        <input
          type="text"
          name="adress"
          onChange={handleChange}
          placeholder="adress"
        />
            <input
          type="number"
          name="size"
          onChange={handleChange}
          placeholder="size"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
            <input
          type="number"
          name="rooms"
          onChange={handleChange}
          placeholder="rooms"
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="image"
        />
        <button type="submit">Update apartment</button>
      </form>
    </>
  );
};