import React, { Component } from 'react';
import Card from './Card';
import SlideProducts from './SlideProducts';

import request  from 'superagent'


class Section extends Component {

	constructor(){
  		super()

  		this.state={
  			dataAll: [],
  			filter: 'all',

  		};

  	}

	componentDidMount(){

	  	request
	  		.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
	  		.then(data =>{
	  			this.setState({
	  				dataAll: data.body

	  			});
	  		})
	}

	createList = () => {
		let category = this.props.match.params.cat
		 //console.log(category)
		if ( category !== '' ) {
			return this.state.dataAll.filter( function (item) {return item.category === category} );
		}

		return this.state.dataAll ;
	}

	productsFilter = (item) => {
		this.setState({
	  		filter: item
		});
	}
	

	products = (item, newArray) =>{
	    if(item === "all") return newArray
	    if(item === true)return newArray.filter(function(newItem){return newItem.onSale === true});
  	}


  	 MaysPrimera = (string) => {
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}



  render() {

  	let newListt = this.createList()
  	const dataAlll = this.state.filter
  	const newList = this.products(dataAlll, newListt)
 	const newListCount = newList.length
 	let title = this.MaysPrimera(this.props.match.params.cat)
    return (
    	<div>
    	<SlideProducts itemImg={title} />
    	<div className='box__container__products'>
	    		<div className='products__conatainer'>
		    		<h1 className='products__title'>{title}</h1>
		    		<p className='products__subtitle'>All available listing</p>
	    		</div>
	    		<div className='button__container'>
			    	<button onClick={ () => { this.productsFilter('all')  } }  className='button'>All items</button>
			    	<button onClick={ () => { this.productsFilter(true)  } } className='button'>On SAle</button>
			    	<p className='count'><span className='count__number'>{newListCount}</span> ites showing</p>
		    	</div>
	    </div>		
	    
	    	
	    	<div className='all'>
	    		
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category} idProduct={p._id} />
				})}
	    	</div>
    	</div>
    );
  }
}

export default Section;