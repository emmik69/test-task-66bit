import { Suspense } from 'react';
import { Outlet } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

import { Header } from '~~>widgets/header';
import { BreadCrumbs } from '~~>widgets/breadCrumbs';

const MainLayout = () => {
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

export { MainLayout };
