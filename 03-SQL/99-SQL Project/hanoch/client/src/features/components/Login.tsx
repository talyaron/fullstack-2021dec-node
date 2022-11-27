import axios from 'axios';
import React from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom'

export const Login =  () => {
  const navigate = useNavigate()
  const handleLogin = async (ev:any) => {
    ev.preventDefault()
    try {
      console.log(ev.target.elements);
      
      let {email} = ev.target.elements
      email = email.value;
      let { password } = ev.target.elements
      password = password.value;
      console.log(email, password);
      
      const result = await axios.get(`/api-guides/login?email=${email}&password=${password}`)
      console.log(result.data);
      if (result.data !== 'no result'){
        navigate('/find-guide')
      //  <Navigate to='/find-guide' replace={true}/>
      } else alert ('please register first!')
      
    } catch (error) {
      console.error(error);
      
    }
  }
  
  return (
    <div>
        <h3>login to find guid</h3>
        <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder='email' />
            <input type="password" name="password" placeholder='password'/>
            <input type="submit" value="login" />
        </form>
        <Link to="/register">if you didn't register yet click here</Link> <br />
        <Link to='/guide-register'>to register as a guide</Link>
    </div>
  )
}
