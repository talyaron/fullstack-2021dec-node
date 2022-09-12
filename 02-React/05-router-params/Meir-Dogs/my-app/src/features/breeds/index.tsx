import React, { useEffect, useState } from 'react'
import { getBreeds } from './getBreeeds'

const Breeds = () => {
   //set state breeds
   const[breeds, setBreeds] = useState<string[] | undefined>([]);
  useEffect (()=>{
    getBreeds().then((brds) =>{
        console.log(brds)
        if (brds) {
        setBreeds(brds);
    }
    });
    
    
  }, []);


  return <div>Breeds</div>;
    
  
};

export default Breeds;