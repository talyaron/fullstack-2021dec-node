import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='link'>
        <Link className='allLink' to='/find-guide/all-Guides'>all guides</Link>
        <Link className='filLink' to='/find-guide/guide-by-filter'>find guide by filter</Link>
    </div>
  )
}
