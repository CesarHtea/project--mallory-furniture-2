import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './css/styles.css';

import Header from './component/Header'
import Slide from './component/Slide'
import Home from './component/Home'
import About from './component/About'
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
	        <Switch>
	          <Route exact path='/' component={Home} />
	          <Route exact path='/about' component={About} />
	        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
