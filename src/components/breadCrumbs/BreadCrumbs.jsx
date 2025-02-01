import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getUserById } from 'store/actionsCreators/user';
import { resetUser } from 'store/actions/user';
import UniversalList from 'ui/others/universalList/UniversalList.jsx';
import { ChevronFactory } from 'ui/svg/chevronFactiry';

import { breadCrumbsData } from './breadCrumbsData';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const { id } = useParams();
	const pathname = useLocation().pathname.split('/').slice(1);

	useEffect(() => {
		if (id) dispatch(getUserById(id));
		if (user.id && !id) dispatch(resetUser());
	}, [id]);

	const crumbs = [
		{ id: 0, title: 'Главная', link: '' },
		...pathname
			.filter((path) => path.length)
			.map((path) => {
				if (path === 'employees')
					return {
						id: breadCrumbsData[path]?.id,
						title: breadCrumbsData[path]?.title,
						link: breadCrumbsData[path]?.link,
					};
				else if (+path === +id) {
					return {
						id: 2,
						title: user.name ? user.name : 'Сотрудник',
						link: `employees/${path}`,
					};
				}
			})
			.filter(Boolean),
	];

	const renderCrumb = ({ item, index }) => (
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
