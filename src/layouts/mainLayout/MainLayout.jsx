import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { CircularProgress } from '@mui/material';

import Header from 'components/header/Header.jsx';
import BreadCrumbs from 'components/breadCrumbs/BreadCrumbs.jsx';

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

export default MainLayout;
