import React, { useReducer } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import axios from 'axios';





const Login=()=>{
 async function handleLogin(ev:any){
    ev.preventDefault();
    let  {email, password} = ev.target.elements;
    email = email.value;
    password =password.value;
    const response = await axios.get(`/api/users/login?email=${email}&password=${password}`);
      console.log(response.data.user[0].user_id)
      const data = response.data.user[0].user_id;
      const Uemail =response.data.user[0].email;
      if (email= Uemail)
      window.location.href= `../homepage?userId=${data}`
    }
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" required placeholder='email'/>
        <input type="password" name="password" required placeholder='password'/>
        <button type="submit">login</button>
      </form>
      <Link className="Register" to="/Register"><button>Don't have account? click to sign in</button></Link>
    </div>
  )
}

export default Login