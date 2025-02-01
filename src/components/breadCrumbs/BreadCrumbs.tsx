import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router';

import { useAppDispath, useAppSelector } from '~~>store';
import { getUserById } from '~~>store/actionsCreators/user';
import { resetUser } from '~~>store/actions/user';
import UniversalList from '~~>ui/others/universalList/UniversalList';
import { ChevronFactory } from '~~>ui/svg/chevronFactory';

import { breadCrumbsData, type IBreadCrumb } from './breadCrumbsData';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
	const dispatch = useAppDispath();
	const { user } = useAppSelector((state) => state.user);
	const { id } = useParams();
	const pathname = useLocation().pathname.split('/').slice(1);

	useEffect(() => {
		if (id) dispatch(getUserById(+id));
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

export default BreadCrumbs;
