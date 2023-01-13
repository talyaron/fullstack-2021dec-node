import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { registerAsync } from '../user/userApi';
import axios from 'axios';

const Register = () => {

 async function handleRegister(ev:any){
    ev.preventDefault();
    console.log('register')
    let  {email, password, name} = ev.target.elements;
    email = email.value;
    password =password.value;
    name = name.value;
    const response = await axios.post('/api/users/register',{email, password, name});
    // The value we return becomes the `fulfilled` action payload
    console.log(response.data.email)
      const data = response.data.user_id.insertId;
      const Uemail =response.data.email;
      if (email= Uemail)
     window.location.href= `../homepage?userId=${data}`
 }
    
 

  return (
    <div className='body'>
      <form onSubmit={handleRegister} className="form">
        <input type="email" name="email" required placeholder='email'/>
        <input type="text" name="name" required placeholder='name'/>
        <input type="password" name="password" required placeholder='password'/>
        <button type="submit" className='button'>Register</button>
      </form>
    </div>
  )
}

export default Register