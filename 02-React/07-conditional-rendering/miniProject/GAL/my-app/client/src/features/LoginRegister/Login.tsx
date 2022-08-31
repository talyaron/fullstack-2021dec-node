import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/LoginRegister.scss";

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
      <div className="formsDiv">
        <h2 className="h">Login</h2>
        <form onSubmit={handleLogin}>
          <input className="form__input" type="email" name="email" placeholder="email" required />
          <input
          className="form__input"
            type="password"
            name="password"
            placeholder="password"
            required
          />
         <Link to="/FactList"><button className="button" type="submit">Send</button></Link>
        </form>
        {error !== null ? <p className="error">{error}</p> : null}
      </div>
    );
  } else {
    return (
      <Link to="/">
        <button>Go to Facts</button>
      </Link>
    );
  }
};

export default Login;
