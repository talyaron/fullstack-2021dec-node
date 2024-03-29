import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: any) => {
    try {
      e.preventDefault();
      const password = e.target.elements.password.value;

      if (password.length < 3) {
        setError("The password must be at least 3 characters long");
      } 
    
      else if (password >= 3) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="form">
        <h2 className="heading">Login</h2>

        <input type="email" name="email" placeholder="email" required />

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
};
