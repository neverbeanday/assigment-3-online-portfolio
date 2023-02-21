import { Avatar } from '../../atoms';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// styles
import './index.scss';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='nav-container'>
          <span className='nav-avatar'>
            <Avatar />
          </span>

          <ul className='nav-links'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/experience'>
              <li>Experience</li>
            </Link>
            <Link to='/skills'>
              <li>Skills</li>
            </Link>
            <Link to='/interest'>
              <li>Interest</li>
            </Link>
            <Link to='/awards'>
              <li>Awards</li>
            </Link>
          </ul>
        </nav>
      </>
    );
  }
}
