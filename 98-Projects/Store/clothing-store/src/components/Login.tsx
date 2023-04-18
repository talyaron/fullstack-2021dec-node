import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  async function handleLogin(ev:any){
    ev.preventDefault();
   
    let  {email, password} = ev.target.elements;

    email = email.value;
    password = password.value;
    
    const response = await fetch(`http://localhost:4000/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"email":email, "password":password})
      })
    let res = await response.json();
    console.log("response from server:", res);

  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" required placeholder='email'/>
        <input type="password" name="password" required placeholder='password'/>
        <Link to="/store">
        <button type="submit">Login</button>

      </Link>
      </form>
    </div>
  )
}

export default Login;