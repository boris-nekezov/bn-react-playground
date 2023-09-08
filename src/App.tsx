import React from 'react';
import { Outlet } from 'react-router-dom';

import { Counter } from './features/counter/Counter';

import './App.css';
import Header from './layouts/Header';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<Outlet />
				<Counter />
			</header>
		</div>
	);
}

export default App;
