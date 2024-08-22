import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    
    <div id='routerHeader'>

      <Nav />

      <Link to="/profile" id='routerNavMenu'>
        Profile
      </Link>

      <Link to="/user" id='routerNavMenu'>
        User
      </Link>
      <Link to="/messeges" id='routerNavMenu'>
        Messeges
      </Link>
      <Link to="/blog" id='routerNavMenu'>
        Blog
      </Link>


    </div>

  )
}

export default Header