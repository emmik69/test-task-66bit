import CircularProgress from '@mui/material/CircularProgress';

import { employeeSlice } from '~~>entities/employee';
import { useAppSelector } from '~~>shared/lib/store';

import EmployeeMainInfo from '../employeeMainInfo/EmployeeMainInfo';
import EmployeePreview from '../employeePreview/EmployeePreview';
import styles from './Employee.module.css';

const Employee = () => {
	const user = useAppSelector(employeeSlice.selectors.userSelector);
	const isLoading = useAppSelector(employeeSlice.selectors.loadindSelector);

	if (user?.id)
		return (
			<div className={styles.employee}>
				<EmployeePreview user={user} />
				<EmployeeMainInfo user={user} />
			</div>
		);
	else if (isLoading)
		return (
			<>
				<CircularProgress sx={{ alignSelf: 'center' }} />
			</>
		);
	else
		return (
			<>
				<h3 className={styles['not-employee']}>Сотрудник не найден</h3>
			</>
		);
};

export { Employee };
