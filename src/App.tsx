import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main className="App">
			<Outlet />
		</main>
	);
}

export default App;
