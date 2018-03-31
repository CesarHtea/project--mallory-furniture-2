import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__image'>
        </div>
        <div className='footer__container'>
          <div className='footer__container__map'>
            <section className='footer__section'>
              <h3 className='footer__title'>Company</h3>
              <ul className='footer__list'>
                <li><Link to={''} className='footer__list__link'>About</Link></li>
                <li><Link to={''} className='footer__list__link'>Prees</Link></li>
                <li><Link to={''} className='footer__list__link'>Terms + Conditions</Link></li>
              </ul>
            </section>
            <section className='footer__section'>
              <h3 className='footer__title'>Categories</h3>
              <ul className='footer__list'>
                <li><Link to={''} className='footer__list__link'>Seating</Link></li>
                <li><Link to={''} className='footer__list__link'>Tables</Link></li>
                <li><Link to={''} className='footer__list__link'>Misc</Link></li>
              </ul>
            </section>
          </div> 
          <div className='footer__container__social'> 
            <section className='footer__section'>
              <h3 className='footer__title'>Social</h3>
              <ul className='footer__list'>
                <li><i className='fa fa-instagram'></i></li>
                <li><i className='fa fa-twitter'></i></li>
                <li><i className='fa fa-pinterest'></i></li>
              </ul>
            </section>
          </div>  
        </div>  
      </footer>
    );
  }
}

export default Footer;