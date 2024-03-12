import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import { SnackbarProvider } from './providers/SnackbarProvider/SnackbarProvider';
import { LocaleProvider } from './providers/LocaleProvider/LocaleProvider';
import { ProjectsHandler } from './pages/ProjectsHandler';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/projects',
				element: <ProjectsHandler />
			}
		],
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LocaleProvider>
			<SnackbarProvider>
				<RouterProvider router={router} />
			</SnackbarProvider>
		</LocaleProvider>
	</React.StrictMode>
);
