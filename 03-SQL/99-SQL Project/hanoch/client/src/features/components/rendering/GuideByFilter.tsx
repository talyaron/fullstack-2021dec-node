import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { GuidesCard } from './GuidesCard';

export const GuideByFilter = () => {
  const [filter, setFilter] = useState([])
  // let country = useRef<HTMLInputElement>(null)
  // let city = useRef<HTMLInputElement>(null)
   async function handleSearch(ev:any){
    ev.preventDefault()
    try {
      let {country, city } = ev.target.elements;
      country = country.value;
      city = city.value;
      const results = await axios.get(`/api-guides/find-by-filter?country=${country}&city=${city}`)
      // getData()
      setFilter(results.data);
      console.log(country, city);
      console.log(results.data);
      
      
    } catch (error) {
      console.log(error);
      
    }
  };
  

  // const getData = async () => {
  //   const results = await axios.get(`/api-guides/find-by-filter?country=${country}&city=${city}`)
  //   console.log(country, city);
  //   console.log(results);
  //   return results.data
  // };

  // useEffect(() => {
  //   country.current?.focus()
  //   city.current?.focus() 
  //   country = country.current?.value 
  // },[filter])

  // const results:any = getData()

  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input className='inputCo' type="text" name='country' placeholder='country'/>
        <input className='inputCi' type="text" name='city' placeholder='city' />
        <input type="submit" value="search" />
      </form>
      <div className='card'>
      {filter !== undefined &&  filter.map((filGuide: any, i) => {
        return (
            
              <GuidesCard key={i} fullName={filGuide.fullName}
                        country={filGuide.country}
                        city={filGuide.city}
                        telephon={filGuide.telephon}
                        email={filGuide.email}
                        image={filGuide.image}/>
            
          )
          
        })}
        </div>
        
    
    </div>
  )
}
