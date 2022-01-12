import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor: '#2e4b6b'}}>
    <div className='navbar-brand'>
      Note App
    </div>

    <ul className='navbar-nav'>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to='/'
          exact >
            Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to='/about'>
            About
        </NavLink>
      </li>
    </ul>
  </nav>
)