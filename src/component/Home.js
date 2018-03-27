import React, { Component } from 'react';
import Slide from './Slide'

import request  from 'superagent'


class Home extends Component {

	componentDidMount(){
	  	request
	  		.get('https://mallory-furniture-admin.now.sh/api/v1/products')
	  		.then(data =>{
	  			console.log(data)
	  		})
	  	}
  render() {
    return (
    	<div>
		<Slide />
    		<h1>This is Home</h1>
    	</div>
    );
  }
}

export default Home;