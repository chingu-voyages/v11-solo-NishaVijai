import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Header } from './assets/components/Header';
import { Main } from './assets/components/Main';
import { Footer } from './assets/components/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
				<div className="header-container">{/* <Header /> */}</div>

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
