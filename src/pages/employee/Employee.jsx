import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import EmployeePreview from 'components/employeePreview/EmployeePreview.jsx';
import EmployeeMainInfo from 'components/employeeMainInfo/EmployeeMainInfo.jsx';

import styles from './Employee.module.css';

const Employee = () => {
	const { user, isLoading } = useSelector((state) => state.user);

	if (user.id)
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
