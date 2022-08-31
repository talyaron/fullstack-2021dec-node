import React from 'react'
import { Link } from 'react-router-dom'

export const login = () => {
  return (
    <div>
        <form action="">
            <input type="email" name="email" id="" />
            <input type="password" name="" id="" />
            <Link to={'/choose-secret'}>
            <input type="submit" value="login" />
            </Link>
        </form>
    </div>
  )
}
