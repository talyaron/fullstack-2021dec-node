import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const pass = "123456";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [newPage, setNewPage] = useState<boolean>(false);
  function handleLogin(ev: any) {
    ev.preventDefault();
    try {
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;

      if (password.length < 6) {
        setError("Your password must me more than six charcters!!!!");
      } else if (password === pass) {
        setNewPage(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (!newPage) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button type="submit">Send</button>
        </form>
        {error !== null ? <p className="error">{error}</p> : null}
      </div>
    );
  } else {
    return (
      <Link to="/">
        <button>Go to Test</button>
      </Link>
    );
  }
};

export default Login;
