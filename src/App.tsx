import React, { useContext } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Snackbar from './components/Snackbar/Snackbar';
import { SnackbarContext } from './providers/SnackbarProvider/SnackbarProvider';

function App() {
	const { showSnackbar, snackbarMessage, snackbarStatus } = useContext(SnackbarContext);
	
	return (
		<main className="App">
			<Outlet />
			<Snackbar visible={showSnackbar} message={snackbarMessage} status={snackbarStatus} />
		</main>
	);
}

export default App;
