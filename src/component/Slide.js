import React, { Component } from 'react';
class Slide extends Component {
  render() {
    return (
      <section>
        <div className='slide__container'>
          <h1 className='slide__title'>Morllory Furniture</h1>
          <p className='slide__slogan'>Your furniture is old<br/>Our is older</p>
        </div>
      </section>
    );
  }
}

export default Slide;