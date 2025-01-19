import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import qs from 'qs';

import { api } from 'api';
import FilterControl from 'components/filterControl/FilterControl.jsx';
import EmployeesTable from 'components/employeesTable/EmployeesTable.jsx';

import styles from './Employees.module.css';

const Employees = () => {
	const [searchParams] = useSearchParams();
	const [employees, setEmployees] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(false);
	const position = searchParams.get('Position')
		? searchParams.get('Position')
		: '';
	const gender = searchParams.get('Gender') ? searchParams.get('Gender') : '';
	const stack = searchParams.get('Stack') ? searchParams.get('Stack') : '';
	const name = searchParams.get('Name') ? searchParams.get('Name') : '';

	useEffect(() => {
		if (isLoading && !lastPage) {
			api.user
				.getUsers({
					params: (() => {
						const filteredParams = {
							page: page,
						};
						if (position.trim())
							filteredParams.position = position.split(',');
						if (gender.trim())
							filteredParams.gender = gender.split(',');
						if (stack.trim())
							filteredParams.stack = stack.split(',');
						if (name.trim()) filteredParams.name = name.split(',');

						return filteredParams;
					})(),
					paramsSerializer: (params) =>
						qs.stringify(params, {
							arrayFormat: 'repeat',
						}),
				})
				.then((res) => {
					if (res.data?.length) {
						setEmployees((cv) => [...cv, ...res.data]);
						setPage((cv) => cv + 1);
					}
					if (
						(res.data && !res.data.length) ||
						res === 'error_request'
					)
						setLastPage(true);
				})
				.finally(() => setIsLoading(false));
		} else {
			setIsLoading(false);
		}
	}, [isLoading]);

	useEffect(() => {
		setEmployees([]);
		setIsLoading(true);
		setPage(1);
		setLastPage(false);
	}, [position, gender, stack, name]);

	useEffect(() => {
		const eventScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				setIsLoading(true);
			}
		};

		window.addEventListener('scroll', eventScroll);

		return () => window.removeEventListener('scroll', eventScroll);
	}, []);

	return (
		<div className={styles.employees}>
			<FilterControl />
			<EmployeesTable employees={employees} isLoading={isLoading} />
		</div>
	);
};

export default Employees;
