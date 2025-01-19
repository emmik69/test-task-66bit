import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import MainLayout from 'layouts/mainLayout/MainLayout.jsx';

const AdapterLayout = lazy(() =>
	import('layouts/adapterLayout/AdapterLayout.jsx')
);
const Main = lazy(() => import('pages/main/Main.jsx'));
const Employees = lazy(() => import('pages/employees/Employees.jsx'));
const Employee = lazy(() => import('pages/employee/Employee.jsx'));

const router = createBrowserRouter([
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: 'employees',
				element: <AdapterLayout />,
				children: [
					{
						index: true,
						element: <Employees />,
					},
					{
						path: ':id',
						element: <Employee />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<div className="App">
			<ToastContainer limit={7} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
