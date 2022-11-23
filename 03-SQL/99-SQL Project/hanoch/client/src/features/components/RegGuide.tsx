import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { addGuid } from '../guides/guideAPI';

export const RegGuide = () => {
  const dispatch = useAppDispatch();

  function handleRegGuide(ev:any) {
    ev.preventDefault()
    try {
      let {fullName, country, city, telephon, email} = ev.target.elements;
      fullName = fullName.value;
      country = country.value;
      city = city.value;
      telephon = telephon.value;
      email = email.value;
      const image = ev.target.files[0];
      console.log(fullName, country, city, telephon, email, image);
      console.log(ev.target.elements);
      
      
      dispatch(addGuid({fullName, country, city, telephon, email, image}))
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <form onSubmit={handleRegGuide}>
      <input type="text" name="fullName"  />
      <input type="text" name='country' />
      <input type="text" name='city' />
      <input type="text" name='telephon' />
      <input type="email" name='email' />
      <input type="file" name="image" />
      <input type="submit" value="register" />
    </form>
  )
}
