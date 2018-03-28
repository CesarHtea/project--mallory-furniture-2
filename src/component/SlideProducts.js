import React, { Component } from 'react';
class SlideProducts extends Component {
  render() {
    //console.log(this.props.category)
    return (
      <div>
        <h1>Titulo</h1>
        <button onClick={ () => { this.productsFilter('all')  } }>All</button>
        <button onClick={ () => { this.productsFilter(true)  } }>On SAle</button>
      </div>
    );
  }
}

export default SlideProducts;