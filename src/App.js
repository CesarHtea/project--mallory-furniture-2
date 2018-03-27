import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';

import Header from './component/Header'
import Slide from './component/Slide'
import Home from './component/Home'
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <Footer />
      </div>
    );
  }
}

export default App;
