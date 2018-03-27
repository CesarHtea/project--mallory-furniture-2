import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card__container__img'>
          <img className='card__img' src='https://mallory-furniture-static.now.sh/product-images/arm-chair-1.jpg'/>
        </div>
        <h5 className='card__title'>Handcrafted Brayton Coupe Grande Club Chairs</h5>
        <p className='card__price'>$ 1800</p>
      </div>
    );
  }
}

export default Card;