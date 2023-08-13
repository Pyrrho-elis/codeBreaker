import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/game">Play</Link>
        </li>
        <li>
            <Link to="/instructions">How to Play</Link>
        </li>
        {/* <li>
            <Link to="/about">About</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
