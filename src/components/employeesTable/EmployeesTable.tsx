import { FC } from 'react';
import { Link } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

import { formatDate, formatPhone } from '~~>utils/helpers/entitiesFormat';
import UniversalTable from '~~>ui/others/universalTable/UniversalTable';
import { type IEmployee } from '~~>pages/employees/Employees';

import styles from './EmployeesTable.module.css';

type EmployeesTableProps = { employees: IEmployee[]; isLoading: boolean };

const EmployeesTable: FC<EmployeesTableProps> = ({ employees, isLoading }) => {
	const renderHead = () => (
		<>
			<th className={styles.column}>ФИО</th>
			<th className={styles.column}>Должность</th>
			<th className={styles.column}>Телефон</th>
			<th className={styles.column}>Дата рождения</th>
		</>
	);

	const renderBody = (item: IEmployee) => (
		<Link to={`${item.id}`}>
			<td className={styles.column}>{item.name}</td>
			<td className={styles.column}>{item.position}</td>
			<td className={styles.column}>{formatPhone(item.phone)}</td>
			<td className={styles.column}>{formatDate(item.birthdate)}</td>
		</Link>
	);

	if (employees.length && isLoading)
		return (
			<>
				<UniversalTable
					className={styles.table}
					data={employees}
					renderBody={renderBody}
					renderHead={renderHead}
				/>
				<CircularProgress sx={{ alignSelf: 'center' }} />
			</>
		);
	else if (employees.length)
		return (
			<UniversalTable
				className={styles.table}
				data={employees}
				renderBody={renderBody}
				renderHead={renderHead}
			/>
		);
	else if (isLoading)
		return <CircularProgress sx={{ alignSelf: 'center' }} />;
	else return <h3 className={styles['not-users']}>Пользователей нет</h3>;
};

export default EmployeesTable;
