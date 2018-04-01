import React, { Component } from 'react';

class SlideProducts extends Component {

slide = e => {
  const imageSlide= {
    seating: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-seating.png',
    tables: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-tables.png',
    desks: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-desks.png',
    storage: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-storage.png',
    bedroom: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-bedroom.png',
    miscellaneous: 'https://raw.githubusercontent.com/DamianAllende/project--mallory-furniture/master/src/images/category-miscellaneous.png'
  }
  console.log(e)
  console.log('------')
  return imageSlide[e]
}

  render() {
      
    
    
    return (
      <div className='container__slide'>
        <img className='container__slide__img' src={this.slide(this.props.itemImg)} />
      </div>
    );
  }
}

export default SlideProducts;