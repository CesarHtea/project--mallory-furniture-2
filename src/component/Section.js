import React, { Component } from 'react';
import Card from './Card';

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
		 console.log(category)
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




  

  render() {

  	let newListt = this.createList()
  	const dataAlll = this.state.filter
  	const newList = this.products(dataAlll, newListt)
 
    return (
    	<div>
	    	<button onClick={ () => { this.productsFilter('all')  } }>All</button>
	    	<button onClick={ () => { this.productsFilter(true)  } }>On SAle</button>
	    	
	    	<div className='all'>
	    		
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category}/>
				})}
	    	</div>
    	</div>
    );
  }
}

export default Section;