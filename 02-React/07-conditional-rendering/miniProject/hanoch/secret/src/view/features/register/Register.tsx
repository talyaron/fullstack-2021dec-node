import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
        <form action="">
            <input type="email" name="email" id="" placeholder='email'/>
            <input type="text" name="name" id="" placeholder='name'/>
            <input type="password" name='password' placeholder='password'/>
            <Link to={'/login'}>
            <input type="submit" value="register" />
            </Link>
        </form>
    </div>
  )
}
