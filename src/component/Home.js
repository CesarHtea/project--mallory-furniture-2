import React, { Component } from 'react';
import Slide from './Slide'

import request  from 'superagent'


class Home extends Component {
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