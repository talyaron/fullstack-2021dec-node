import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addGuid } from '../guides/guideAPI';
import '../../style/reg.scss'

export const RegGuide = () => {
  const dispatch = useAppDispatch();

  function handleRegGuide(ev:any) {
    ev.preventDefault()
    try {
      let {fullName, country, city, telephon, email, image} = ev.target.elements;
      fullName = fullName.value;
      country = country.value;
      city = city.value;
      telephon = telephon.value;
      email = email.value;
      image = image.value;
      console.log(fullName, country, city, telephon, email, image);
      console.log(ev.target.elements);
      
      
      dispatch(addGuid({fullName, country, city, telephon, email, image}))
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <div className='regGuide'>
      <h1 className='headLine'>register as a guide</h1>
    <form className='formReg' onSubmit={handleRegGuide}>
      <input className='inputReg' type="text" name="fullName" placeholder='full name' />
      <input className='inputReg' type="text" name='country' placeholder='country'/>
      <input className='inputReg' type="text" name='city' placeholder='city'/>
      <input className='inputReg' type="text" name='telephon' placeholder='telephone'/>
      <input className='inputReg' type="email" name='email' placeholder='email'/>
      <input className='inputReg' type="text" name="image" placeholder='url of image' />
      <input type="submit" value="register" />
    </form>
    </div>
    )
    
  
}
