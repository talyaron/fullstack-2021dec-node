import { useState } from "react";
import {Navigate} from 'react-router-dom'


export const Login = () => {
  const [homePage, setHomePage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
 
  const handleLogin = (e: any) => {

    try {
      e.preventDefault();
      const password = e.target.elements.password.value;

      if (password.length < 6) {
        setError("The password must be at least 6 characters long");
        
      } else if(password >= 6) {
        setHomePage(true)
        console.log(true)
      }

    } catch (error) {
      console.error(error);
    }
  };


  if (!homePage) {
    return (
      <div>
       
        <form onSubmit={handleLogin} className="form">
          <h2 className="heading">Login</h2>
          <input 
            type="email" 
            name="email" 
            placeholder="email" 
            required 
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
 
          <button>Submit</button>
          
        </form>
        
        {error !== null ? <p className="error">{error}</p> : null}
        
      </div>
    );

  } else {
    return (
      <Navigate to="/list"/>

    )
  }
};
