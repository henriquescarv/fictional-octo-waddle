import React, { useContext } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Snackbar from './components/Snackbar/Snackbar';
import { SnackbarContext } from './providers/SnackbarProvider/SnackbarProvider';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	const { showSnackbar, snackbarMessage, snackbarStatus } = useContext(SnackbarContext);
	
	return (
		<main className="App">
			<Navbar />
			<Outlet />
			<Footer />
			<Snackbar visible={showSnackbar} message={snackbarMessage} status={snackbarStatus} />
		</main>
	);
}

export default App;
