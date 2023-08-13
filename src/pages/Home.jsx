import React from 'react'
import GameLoop from '../components/GameLoop'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='main'>
      <div className="card">
        <h1>CRACK THE CODE!</h1>
        <Link to="/game">
          <button>PLAY</button>
        </Link>
        <Link to="/instructions">
          <button>How to play!</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  )
}
