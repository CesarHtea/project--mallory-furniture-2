import React, { Component } from 'react';
import Card from './Card';

import request  from 'superagent'


class All extends Component {
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

	productsFilter = (item) => {
		this.setState({
		 	filter: item
		});
	}
	
	products = (item) =>{
	    if(item === "all") return this.state.dataAll
	    if(item === true)return this.state.dataAll.filter(function(newItem){return newItem.onSale === true});
  	}

  

  render() {
  	const dataAlll = this.state.filter
  	const newList = this.products(dataAlll)
  	const newListCount = newList.length
  	console.log(newListCount)
    return (
    	<div>
    		<div className='box__container__all'>
	    		<div className='products__conatainer'>
		    		<h1 className='products__title'>All Products</h1>
		    		<p className='products__subtitle'>All available listing</p>
	    		</div>
	    		<div className='button__container'>
			    	<button onClick={ () => { this.productsFilter('all')  } }  className='button'>All</button>
			    	<button onClick={ () => { this.productsFilter(true)  } } className='button'>On SAle</button>
			    	<h3 className='count'><span className='count__number'>{newListCount}</span> ites showing</h3>
		    	</div>
	    	</div>
	    	<div className='all'>
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category}/>
				})}
	    	</div>
    	</div>
    );
  }
}

export default All;