import CircularProgress from '@mui/material/CircularProgress';

import { useAppSelector } from '~~>store';
import EmployeePreview from '~~>components/employeePreview/EmployeePreview';
import EmployeeMainInfo from '~~>components/employeeMainInfo/EmployeeMainInfo';

import styles from './Employee.module.css';

const Employee = () => {
	const { user, isLoading } = useAppSelector((state) => state.user);

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

export default Employee;
