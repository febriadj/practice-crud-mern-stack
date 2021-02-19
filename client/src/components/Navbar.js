import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-wrap">
        <div className="title"><Link to="/">Mern Project</Link></div>
        <div className="path"><Link to="/post">Post</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar