import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import MainLayout from '../layouts/mainLayout';

const AdapterLayout = lazy(() => import('../layouts/adapterLayout'));
const Main = lazy(() => import('~~>pages/main'));
const Employees = lazy(() => import('~~>pages/employees'));
const Employee = lazy(() => import('~~>pages/employee'));

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

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export { AppRouter };
