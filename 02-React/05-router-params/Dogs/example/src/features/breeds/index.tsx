import React, { useEffect, useState } from "react";
import { getBreeds } from "./getBreeds";

const Breeds = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    getBreeds().then((brds) => {
      if (brds) {
        console.log(brds)
        setBreeds(brds);
      }
    });
  }, []);

  return <div>Breeds</div>;
};

export default Breeds;
