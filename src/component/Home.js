import React, { Component } from 'react';
import Slide from './Slide';
import Card from './Card';

import { Link } from 'react-router-dom';

import request  from 'superagent'


class Home extends Component {

	constructor(){
  		super()

  		this.state={
  			dataAll: [],
  			filter: 'all'
  		};

  	}


	componentDidMount(){
	  	request
	  		.get('https://mallory-furniture-admin.now.sh/api/v1/products')
	  		.then(data =>{
	  			this.setState({
	  				dataAll: data.body
	  			});
	  		})
	}


	createList = () => {
		return this.state.dataAll.filter( function (item) {return item.featured === true} );
	}

	
  render() {
  	console.log(this.createList())
  	const newList = this.createList()
    return (
    	<div>
			<Slide />
			<div className='box__container__products'>
				<div className='products__conatainer'>
		    		<h1 className='products__title'>Featured Products</h1>
		    		<p className='products__subtitle'>Check out some of our favorite listings</p>
		    	</div>
		    </div>	
			<div className='all'>
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category} idProduct={p._id}/>
				})}
	    	</div>
	    	<div className='container__button'>
	    		<Link className='button__all__link' to='/all'><button className='button__all'>All Products</button></Link>
    		</div>
    	</div>
    );
  }
}

export default Home;