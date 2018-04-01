import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import logoWhite from '../images/mf-logo-white.svg';
class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <Link to='/' className='header_link'>
            <img className='header__logo' src={logoWhite} />
          </Link>  
          <nav className='header__principal'>
            <ul className='listNav'>
              <li><Link to='/About' className='header_link'>About</Link></li>
              <li><Link to='/Terms' className='header_link'>Terms + Condition</Link></li>  
              <li>|</li>
              <li><Link to='/all' className='header_link'>All</Link></li>
            </ul>
          </nav>
          <nav className='header__secondary'>
            <ul className='listNav'>
              <li><NavLink to="/section/seating" activeStyle={{ color:'red' }}>About</NavLink></li>
              <li><Link to={'/section/seating'  } className='header_link__blue'>Seating</Link></li> 
              <li><Link to={'/section/tables'} className='header_link__blue' activeStyle = {{color :  ' red ' }}>Tables</Link></li>   
              <li><Link to={'/section/desks'} className='header_link__blue'>Desks</Link></li>
              <li><Link to={'/section/storage'} className='header_link__blue'>Storage</Link> </li>
              <li><Link to={'/section/bedroom'} className='header_link__blue'>Bedroom</Link></li>
              <li><Link to={'/section/miscellaneous'} className='header_link__blue'> Misc</Link></li>
              <li>|</li>
            </ul>   
          </nav>
        </div>  
      </header>
    );
  }
}

export default Header;