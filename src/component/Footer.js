import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <section className='footer__section'>
          <h3 className='footer__title'>Company</h3>
          <ul className='footer__list'>
            <li>About</li>
            <li>Prees</li>
            <li>Terms + Conditions</li>
          </ul>
        </section>
        <section>
          <h3 className='footer__title'>Categories</h3>
          <ul className='footer__list'>
            <li>Seating</li>
            <li>Tables</li>
            <li>Misc</li>
          </ul>
        </section>
        <section>
          <h3 className='footer__title'>Social</h3>
          <ul className='footer__list'>
            <li><i></i></li>
            <li><i></i></li>
            <li><i></i></li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;