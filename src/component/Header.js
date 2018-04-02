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
              <li><NavLink to={'/section/seating'  } className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }} >Seating</NavLink></li> 
              <li><NavLink to={'/section/tables'} className='header_link__blue'  activeStyle={{ color: '#ffc107', border:'none' }}> Tables</NavLink></li>   
              <li><NavLink to={'/section/desks'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}>Desks</NavLink></li>
              <li><NavLink to={'/section/storage'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}>Storage</NavLink> </li>
              <li><NavLink to={'/section/bedroom'} className='header_link__blue'activeStyle={{ color: '#ffc107', border:'none' }} >Bedroom</NavLink></li>
              <li><NavLink to={'/section/miscellaneous'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}> Misc</NavLink></li>
              <li>|</li>
            </ul>   
          </nav>
           <nav className='header__third'>
            <ul className='listNav'>
            <li><i class="fa fa-shopping-cart"></i></li>
            </ul>   
          </nav>
        </div>  
      </header>
    );
  }
  
}

export default Header;