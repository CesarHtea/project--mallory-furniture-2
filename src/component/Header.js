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
            <Link to={'/section/seating'} className='header_link'>
              <li>Seating</li>
            </Link>
            <Link to={'/section/tables'} className='header_link'>   
              <li>Tables</li>
            </Link>
            <Link to={'/section/desks'} className='header_link'>    
              <li>Desks</li>
            </Link>
            <Link to={'/section/storage'} className='header_link'>    
              <li>Storage</li>
            </Link> 
            <Link to={'/section/bedroom'} className='header_link'>   
              <li>Bedroom</li>
            </Link> 
            <Link to={'/section/miscellaneous'} className='header_link'>   
              <li>Misc</li>
            </Link> 
            <li>|</li>
          </ul>   
        </nav>
      </header>
    );
  }
}

export default Header;