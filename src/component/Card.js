import React, { Component } from 'react';
class Card extends Component {
  render() {
    //console.log(this.props.category)
    return (
      <div className='card'>
        <div className='card__container__img'>
          <img className='card__img' src={this.props.image}/>
        </div>  
        <h5 className='card__title'>{this.props.name}</h5>
        <p className='card__price'>$ {this.props.price}</p>
      </div>
    );
  }
}

export default Card;