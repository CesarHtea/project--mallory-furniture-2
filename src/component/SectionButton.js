import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionButton extends Component {
  render() {
    return (
    	<div>
    		<div className='products__conatainer'>
	    		<h1 className='products__title'>Featured Products</h1>
	    		<p className='products__subtitle'>Check out some of our favorite listings</p>
	    	</div>

	    	<div className='container__button'>
	    		<Link className='button__section__link' to='./section/seating'><button className='button__section'>Seating</button></Link>
	    		<Link className='button__section__link' to='./section/tables'><button className='button__section'>Tables</button></Link>
	    		<Link className='button__section__link' to='./section/desks'><button className='button__section'>Desks</button></Link>
	    		<Link className='button__section__link' to='./section/storage'><button className='button__section'>Storage</button></Link>
	    		</div>
	    		<div className='container__button'>
	    		<Link className='button__section__link' to='./section/bedroom'><button className='button__section'>Bedroom</button></Link>
	    		<Link className='button__section__link' to='./section/miscellaneous'><button className='button__section'>Misc</button></Link>
	    		</div>

    	</div>
    	
    );
  }
}

export default SectionButton;