import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logoWhite from '../images/mf-logo-white.svg';
class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Link to='/' className='header_link'>
          <img className='header__logo' src={logoWhite} />
        </Link>  
        <nav className='header__principal'>
          <ul className='listNav'>
            <Link to='/About' className='header_link'>
              <li>About</li>
            </Link>
            <Link to='/Terms' className='header_link'>
              <li>Terms + Condition</li>
            </Link>  
            <li>|</li>
            <Link to='/all' className='header_link'>
              <li>All</li>
            </Link>   
          </ul>
        </nav>
        <nav className='header__secondary'>
          <ul className='listNav'>
            <li>Seating</li>
            <li>Tables</li>
            <li>Desks</li>
            <li>Storage</li>
            <li>Bedroom</li>
            <li>Misc</li>
            <li>|</li>
          </ul>   
        </nav>
      </header>
    );
  }
}

export default Header;