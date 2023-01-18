import { Link } from "react-router-dom";

const Register = () => {
  async function handleRegister(ev:any){
    ev.preventDefault();
   
    let  {username, email, password} = ev.target.elements;

    username = username.value;
    email = email.value;
    password = password.value;
    
    const response = await fetch(`http://localhost:4000/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"username": username, "email":email, "password":password})
      })
      
    let res = await response.json();
    console.log("response from server:", res);

  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input  name="username" required placeholder='username'/>
        <input type="email" name="email" required placeholder='email'/>
        <input type="password" name="password" required placeholder='password'/>
        <button type="submit">register</button>

      </form>
    </div>
  )
}

export default Register;