import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export const Login: React.FC = () => {
  const [homePage, setHomePage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    try {
      e.preventDefault();
      const password = e.target.elements.password.value;

      if (password.length < 3) {
        setError("The password must be at least 3 characters long");
      } else if (password >= 3) {
        setHomePage(true);
        navigate("/list");
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
            required />

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
    return null
  }
};
