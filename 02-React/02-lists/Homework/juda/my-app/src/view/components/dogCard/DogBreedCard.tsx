import React, { Component } from "react";

interface DogProps {

  breed: string;
  coat: string;
  country: string;
  origin: string;
  pattern: string;

}

const DogBreedCard = ({ breed, coat, country,origin, pattern }: DogProps) => {

    return (
      <div className="card">
        <h2> {breed} </h2>
        <h3> {coat}</h3>
        <h3> {country}</h3>
        <h3> {origin}</h3>
        <h3> {pattern}</h3>
   
       
      </div>
    );
  };
  
  export default DogBreedCard;