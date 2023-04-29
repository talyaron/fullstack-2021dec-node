import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  function handleLogin(ev:any) {
    ev.preventDefault();
    try {
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;

      if(password.length < 6){
        setError("Your Password must be more than six characters");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder='email'required />
        <input type="password" name="password" placeholder="password" required />
        <button type='submit'>Send</button>

      </form>
      {error !== null? <p className="error">{error}</p>:null}
    </div>
  )
}

export default Login