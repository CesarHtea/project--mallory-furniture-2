import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';

import Header from './component/Header'
import Slide from './component/Slide'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
      </div>
    );
  }
}

export default App;
