import React from 'react';
import './App.css';

import { Header } from './assets/components/Header';
import { Main } from './assets/components/Main';
import { Footer } from './assets/components/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="header-container">
					<Header />
				</div>

				<div className="main-container">
					<Main />
				</div>

				<div className="footer-container">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
