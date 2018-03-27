import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

class AppRouter extends Component {
	render(){
		return (
			<HashRouter>
				<App />
			</HashRouter>
		);
	}
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
