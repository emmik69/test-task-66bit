import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router';

import {
	employeeSlice,
	getEmployeeById,
	resetUser,
} from '~~>entities/employee';
import { useAppDispatch, useAppSelector } from '~~>shared/lib/store';
import { UniversalList } from '~~>shared/ui/others';
import { ChevronFactory } from '~~>shared/ui/icons';

import { breadCrumbsData } from '../../lib/consts';
import { type IBreadCrumb } from '../../model/types';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(employeeSlice.selectors.userSelector);
	const { id } = useParams();
	const pathname = useLocation().pathname.split('/').slice(1);

	useEffect(() => {
		if (id) dispatch(getEmployeeById(+id));
		if (user?.id && !id) dispatch(resetUser());
	}, [id]);

	const crumbs: IBreadCrumb[] = [
		{ id: 0, title: 'Главная', link: '' },
		...pathname
			.filter((path) => path.length)
			.flatMap((path) => {
				if (path === 'employees' && breadCrumbsData[path]) {
					return [breadCrumbsData[path]];
				} else if (id && path === id) {
					return [
						{
							id: 2,
							title: user?.name ?? 'Сотрудник',
							link: `employees/${path}`,
						},
					];
				}
				return [];
			}),
	];

	const renderCrumb = (item: IBreadCrumb, index: number) => (
		<>
			{index > 0 && <ChevronFactory type="breadcrumb" />}
			<Link to={item.link}>{item.title}</Link>
		</>
	);

	return (
		<nav className={styles['bread-crumbs']}>
			<UniversalList
				items={crumbs}
				renderItem={renderCrumb}
				className={styles['list-crumbs']}
			/>
		</nav>
	);
};

export { BreadCrumbs };
