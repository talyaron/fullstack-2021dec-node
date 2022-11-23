import React from 'react';
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <h3>login to find guid</h3>
        <form action="">
            <input type="email" name="email"  />
            <input type="password" name="pass" />
        </form>
        <Link to="/register">if you didn't register yet click here</Link>
        <Link to='/guide-register'>to register as a guide</Link>
    </div>
  )
}
