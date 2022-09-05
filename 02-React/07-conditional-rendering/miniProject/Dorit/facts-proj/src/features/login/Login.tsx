import { useState } from "react";
import { Link } from 'react-router-dom'
import { FactsList } from '../factsList/FactsList'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [passTrue, setpassTrue] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate()
  const handleLogin = (ev: any) => {

    try {
      ev.preventDefault();
      const password = ev.target.elements.password.value;

      if (password.length < 6) {
        setError("The password must be at least 6 characters long");
        return(
          <h2>{error}</h2>
        )
        
      } else if(password >= 6) {
        setpassTrue(true)
      }

    } catch (error) {
      console.error(error);
    }
  };

return (
  <>
    {
      !passTrue ? (
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
      ) :
          (
            navigate('/list')
          )
    }
  
  </>
  )
}

  // if (!passTrue) {
  //   console.log(passTrue)
  //   return (
  //     <div>
  //       <form onSubmit={handleLogin} className="form">
  //         <h2 className="heading">Login</h2>
  //         <input 
  //           type="email" 
  //           name="email" 
  //           placeholder="email" 
  //           required 
  //         />

  //         <input
  //           type="password"
  //           name="password"
  //           placeholder="password"
  //           required
  //         />

  //         <button>Submit</button>
  //       </form>

  //       {error !== null ? <p className="error">{error}</p> : null}
  //     </div>
  //   );

  // } else {
  //     navigate("/list")
  //     // return (
  //     //     <Link to="/list">To facts list</Link>
  //     //   );
  // }
// };
