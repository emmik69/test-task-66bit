import { Suspense } from 'react';
import { Outlet } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

import { Header } from '~~>components/header';
import BreadCrumbs from '~~>components/breadCrumbs/BreadCrumbs';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<BreadCrumbs />
			<Suspense
				fallback={<CircularProgress sx={{ alignSelf: 'center' }} />}
			>
				<Outlet />
			</Suspense>
		</>
	);
};
