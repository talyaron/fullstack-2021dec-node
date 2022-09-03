import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
        <form action="">
            <input type="email" name="email" id="" placeholder='email' />
            <input type="password" name="" id="" placeholder='password'/>
            <Link to={'/choose-secret'}>
                <input type="submit" value="login" />
            </Link>
        </form>
    </div>
  )
}

// export default Login