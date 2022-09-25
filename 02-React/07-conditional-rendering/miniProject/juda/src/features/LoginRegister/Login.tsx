import "./Login.scss"
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const pass = "1234"

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [newPage, setNewPage] = useState<boolean>(false);

  function handleLogin(ev: any) {
    ev.preventDefault()
    console.log('start function handleLogin')
    try {
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;
      console.log(email)
      console.log(password)

      if (password.length < 6) {
        setError('Password is too short')
      }

      if (password === pass) {
        setNewPage(true)
      }

    } catch (error) {
      console.error(error)
    }
  }
  if (!newPage) {

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input name='email' type="email" placeholder='Email' required />
          <input name='password' type="password" placeholder='Password' required />

          <button type="submit">Login</button>
        </form>
        {error !== null ? <p className='error'>{error}</p> : null}
      </div>
    )
  } else {
    return (<Link to='/game'> <button>Start the game</button></Link>)
  }
}



export default Login;