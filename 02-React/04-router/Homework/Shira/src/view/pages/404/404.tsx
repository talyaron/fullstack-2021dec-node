import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="page">
    <h1>404</h1>
        <h2>Page not fount</h2>
        <Link to='/'>Go to Home</Link>
        </div>
  )
}

export default Page404