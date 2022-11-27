import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Link to='/find-guide/all-Guides'>all guides</Link>
        <Link to='/find-guide/guide-by-filter'>find guide by filter</Link>
    </div>
  )
}
