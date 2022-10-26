import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register</h1>Register

      <form onSubmit={handleRegister}>
        <input name='email' type="email" placeholder='Email' />
        <input name='password' type="password" placeholder='Password' />

        <input type="submit" value="Register" />
      </form>
    </div>
  )
}


function handleRegister(ev:any){
  ev.preventDefault()
  console.log("run handleRegister")
}

export default Register