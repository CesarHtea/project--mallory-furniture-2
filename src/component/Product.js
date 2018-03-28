import React, { Component } from 'react';
class Product extends Component {
  render() {
      return (
    	<div className='product'>
    		<div className='product__imgContainer'>
    			<img src='https://mallory-furniture-static.now.sh/product-images/arm-chair-1.jpg' className='product__image' />
    		</div>
    		<div className='product__infoContainer'>
    			<div className='product__information'>
    				<h1 className='product__information__title'>Handcrafted Brayton Coupe Grande Club Chairs</h1>
    				<h5 className='product__information__price'>$1800</h5>
    			</div>
    			<div className='product__action'>
    				<div className='product__resumen'>
    					<p className='condition__title'>Condition</p>
    					<p className='condition__result'>Very Good</p>
    				</div>
    				<div className='product__resumen'>
    					<p className='condition__title'>Measurements</p>
    					<p className='condition__result'>W:32 L:67 H:89</p>
    				</div>
    				<button className='button__buy'>Add to Car</button>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default Product;