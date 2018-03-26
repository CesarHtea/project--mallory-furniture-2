import React, { Component } from 'react';
import logoWhite from '../images/mf-logo-white.svg';
class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav className='header__principal'>
          <img className='header__logo' src={logoWhite} />
          <ul>
            <li>About</li>
            <li>Terms + Condition</li>
            <li>|</li>
            <li>All</li>
          </ul>
        </nav>
        <nav className='header__secondary'>
          <ul>
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