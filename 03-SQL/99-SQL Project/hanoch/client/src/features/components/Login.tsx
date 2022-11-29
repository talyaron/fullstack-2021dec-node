import axios from 'axios';
import React from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import '../../style/login.scss';

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
      } else alert ('please register first!')
      
    } catch (error) {
      console.error(error);
      
    }
  }
  
  return (
    <div className='login'>
        <h3 className='headLine'>login to find guid</h3>
        <form className='form' onSubmit={handleLogin}>
            <input className='input' type="email" name="email" placeholder='email' /> <br />
            <input className='input' type="password" name="password" placeholder='password'/> <br />
            <input className='input' type="submit" value="login" />
        </form> <br />
        <Link className='linkTour' to="/register">if you didn't register yet click here</Link> <br />
        <Link className='linkGuide' to='/guide-register'>to register as a guide</Link>
    </div>
  )
}
