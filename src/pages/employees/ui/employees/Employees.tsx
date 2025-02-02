import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import qs from 'qs';

import { FilterControl } from '~~>widgets/filter';
import { type IEmployee } from '~~>shared/model/types';

import { getEmployees } from '../../api/employees';
import { EmployeesTable } from '../employeesTable/EmployeesTable';
import styles from './Employees.module.css';

type IFilteredParams = {
	page: number;
	position?: string[];
	gender?: string[];
	stack?: string[];
	name?: string[];
};

const Employees = () => {
	const [searchParams] = useSearchParams();
	const [employees, setEmployees] = useState<IEmployee[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(false);
	const position = searchParams.get('Position') ?? '';
	const gender = searchParams.get('Gender') ?? '';
	const stack = searchParams.get('Stack') ?? '';
	const name = searchParams.get('Name') ?? '';

	useEffect(() => {
		if (isLoading && !lastPage) {
			getEmployees({
				params: (() => {
					const filteredParams: IFilteredParams = {
						page: page,
					};
					if (position.trim())
						filteredParams.position = position.split(',');
					if (gender.trim())
						filteredParams.gender = gender.split(',');
					if (stack.trim()) filteredParams.stack = stack.split(',');
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
					} else setLastPage(true);
				})
				.catch(() => setLastPage(true))
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

export { Employees };
