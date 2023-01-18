import { useState } from "react";
import { Link } from "react-router-dom";


// const Login = () => {
//   const [error, setError] = useState<string | null>(null);
//   const [newPage, setNewPage] = useState<boolean>(false);
//   function handleLogin(ev: any) {
//     ev.preventDefault();
//     try {
//       const email = ev.target.elements.email.value;
//       const password = ev.target.elements.password.value;

//       if (password.length < 6) {
//         setError("Your password must me more than six charcters!!!!");
//       } else if (password === password) {
//         setNewPage(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   if (!newPage) {
//     return (
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input type="email" name="email" placeholder="email" required />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         {error !== null ? <p className="error">{error}</p> : null}
//       </div>
//     );
//   } else {
//     return (
//       <Link to="/store">
//         <button>Login</button>
//       </Link>
//     );
//   }
// };

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