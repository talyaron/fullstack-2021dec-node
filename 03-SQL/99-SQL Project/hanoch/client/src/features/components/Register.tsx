import { prototype } from 'events';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { AddCostumerAsync } from '../costumers/costumerAPI';

export const Register = () => {
  const dispatch = useAppDispatch()
  const handleRegister = (ev:any) => {
    ev.preventDefault();
    try {
      let {fullname, telephon, email, password} = ev.target.elements;
      fullname = fullname.value;
      telephon = telephon.value;
      email = email.value;
      password = password.value;

     const result = AddCostumerAsync({fullname, telephon, email, password})
     dispatch(result);
     console.log(result);
     
    } catch (error) {
      console.error(error);
      
    }
  } 
  
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input type="text" name="fullname" placeholder='full name' />
        <input type="text" name="telephon" placeholder='telephone'/>
        <input type="email" name='email' placeholder='email'/>
        <input type="password" name="password" placeholder='password' />
        <input type="submit" value="register" />
      </form>
    </div>
  )
}
