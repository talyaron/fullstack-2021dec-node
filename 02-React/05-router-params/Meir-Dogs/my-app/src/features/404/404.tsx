import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="page">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to='/'>Go to Breeds</Link>
    </div>
  )
}

export default Page404