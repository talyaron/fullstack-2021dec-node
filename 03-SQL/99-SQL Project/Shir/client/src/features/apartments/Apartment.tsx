import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Apartment from "./appartInterface";

//import {db} from "../../app/dbBroker/connect"

export const Apartments = () => {
    // const [apartments, setApartments] = useState([]);
    // const [setApartments] = useState([]);
    
    const apartments: Apartment[]  =  [
      {
        id: 1,
        city: "Netivot",
        address: "Bar Ilan 35",
        size: 330,
        rooms: 4,
        price: 300000000,
        image:'https://rb.gy/0zixrr',
        owner: "I.H Dimri"
      },
      {
        id: 2,
        city: "Netivot",
        address: "Bar Ilan 34",
        size: 330,
        rooms: 4,
        price: 200000000,
        image: "https://rb.gy/f9qhbx",
        owner: "Oded Shriki"
      },
    ]
    // let query
    // apartments.map(ap => {
    //   query = `INSERT INTO apartments (city, address, size, rooms, price, image) VALUES ('${ap.city}', '${ap.address}', '${ap.size}', '${ap.rooms}', '${ap.price}', '${ap.image}')`;
    //   db.query(query, (err: any)=>{
    //     try {
    //         if(err) throw err;
    //     } catch (error) {
    //         console.error(error);
    //     }
    //    })
    // })
   // db.query(query, (err)=>{

    
   // Filter by price range
   // return apartments.filter(function(x){ return x.price >= 250 && x.price <= 800});


    let apartments_new = []
    useEffect(() => {
      const fetchAllApartments = async () => {
        try {
          const { data } = await axios.get("http://localhost:4000/apartments");
          console.log(data.data);
          // setApartments(data.data) 
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
      <div >
        <h2>Your Next Apartment!</h2>
        <div className="apartments">
          {apartments.map((apartment: Apartment) => (
            <div className="apartmentCard" key={apartment.id}>
              {/* {apartment.image && <img src={apartment.image} alt="" />} */}
              {/* {<img src={apartment.image} alt="" />} */}
              {<img src={apartment.image} alt="" />}

            <p></p>
              <span>
                Price: {apartment.price}
              </span>
              <p>size: {apartment.size} m</p>
              <p> {apartment.rooms} rooms </p>
              <p>address: {apartment.address} </p>
              <p> {apartment.city} </p>

              

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