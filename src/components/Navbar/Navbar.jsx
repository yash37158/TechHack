import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import './navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <image src={logo} className='navbar-logo' />
        </div>
        <div className="nav-elements">
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
              <NavLink to="/Rules">Rules & Navigations</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar