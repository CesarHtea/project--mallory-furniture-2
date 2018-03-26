import React, { Component } from 'react';
import logoWhite from '../images/mf-logo-white.svg';
class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logoWhite} />
          <ul>
            <li>About</li>
            <li>Terms + Condition</li>
            <li>|</li>
            <li>All</li>
          </ul>
        </nav>
        <nav>
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