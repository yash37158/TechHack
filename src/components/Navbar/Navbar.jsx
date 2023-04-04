import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './navbar.css';
import React from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
       <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Hackathons">Hackathons</NavLink>
            </li>
            <li>
              <NavLink to="/Entertainment">Entertainment</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Coc">Code of Conduct</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar