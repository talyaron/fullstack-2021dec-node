import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { loginAsync } from '../user/userApi';
import { Link } from 'react-router-dom'


const Login = () => {
const dispatch = useAppDispatch();

  function handleLogin(ev:any){
    ev.preventDefault();
    console.log('login')
    let  {email, password} = ev.target.elements;
    email = email.value;
    password =password.value;

     const pass = dispatch(loginAsync({email, password}));
    if(pass.arg.email =email){
        window.location.href= '../homepage'
        console.log('work')
    }
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