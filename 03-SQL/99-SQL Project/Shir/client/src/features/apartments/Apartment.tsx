import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Apartment from "./appartInterface";


export const Apartments = () => {
    const [apartments, setApartments] = useState([]);
  
    useEffect(() => {
      const fetchAllApartments = async () => {
        try {
          const { data } = await axios.get("http://localhost:4000/apartments");
          console.log(data.data);
          setApartments(data.data) 
        } catch (error) {
          console.error(error);
        }
      }
      fetchAllApartments();
    }, []) 
  
    const handleDelete = async (id: number) => {
      try {
        const { data } = await axios.delete("http://localhost:4000/apartments/"+id);
      } catch (error) {
        console.error(error);
      }
    }
  
  
    return (
      <div>
        <h2>Your Next Apartment!</h2>
        <div className="apartments">
          {apartments.map((apartment: Apartment) => (
            <div className="apartment" key={apartment.id}>
              {apartment.cover && <img src={apartment.cover} alt="" />}
              <span>
                Price: (apartment.price)
              </span>
              <button
                className="deleteBtn"
                onClick={() => handleDelete(apartment.id)}
              >
                Delete this apartment
              </button>
              <button className="updateBtn">
                <Link className="textDecoration" to={`/update/${apartment.id}`}>
                  Update apartment
                </Link>
              </button>
            </div>
          ))}
        </div>
        <button className="addBtn">
          <Link className="textDecoration" to="/add">
            Add new apartment
          </Link>
        </button>
      </div>
    );
  }