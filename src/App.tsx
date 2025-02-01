import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { MainLayout } from '~~>layouts/mainLayout';

const AdapterLayout = lazy(
	() => import('~~>layouts/adapterLayout/AdapterLayout')
);
const Main = lazy(() => import('~~>pages/main/Main'));
const Employees = lazy(() => import('~~>pages/employees/Employees'));
const Employee = lazy(() => import('~~>pages/employee/Employee'));

const router = createBrowserRouter(
	[
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
	],
	{
		basename: import.meta.env.BASE_URL,
	}
);

function App() {
	return (
		<div className="App">
			<ToastContainer limit={7} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
