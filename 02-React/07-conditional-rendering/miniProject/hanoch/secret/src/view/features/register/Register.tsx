import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
        <form action="">
            <input type="email" name="email" id="" />
            <input type="text" name="name" id="" />
            <input type="password" name='password' />
            <Link to={'/login'}>
            <input type="submit" value="register" />
            </Link>
        </form>
    </div>
  )
}
