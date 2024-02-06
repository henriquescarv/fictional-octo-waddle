import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { SnackbarProvider } from './providers/SnackbarProvider/SnackbarProvider';
import { LocaleProvider } from './providers/LocaleProvider/LocaleProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		],
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LocaleProvider>
			<SnackbarProvider>
				<Navbar />
				<RouterProvider router={router} />
				<Footer />
			</SnackbarProvider>
		</LocaleProvider>
	</React.StrictMode>
);
