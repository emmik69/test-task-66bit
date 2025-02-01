import { Link } from 'react-router';
import { CircularProgress } from '@mui/material';

import { formatDate, formatPhone } from 'utils/helpers/entitiesFormat';
import UniversalTable from 'ui/others/universalTable/UniversalTable.jsx';

import styles from './EmployeesTable.module.css';

const EmployeesTable = ({ employees, isLoading }) => {
	const renderHead = () => (
		<>
			<th className={styles.column}>ФИО</th>
			<th className={styles.column}>Должность</th>
			<th className={styles.column}>Телефон</th>
			<th className={styles.column}>Дата рождения</th>
		</>
	);

	const renderBody = ({ item }) => (
		<>
			<td className={styles.column}>
				<Link to={`${item.id}`}>{item.name}</Link>
			</td>
			<td className={styles.column}>{item.position}</td>
			<td className={styles.column}>{formatPhone(item.phone)}</td>
			<td className={styles.column}>{formatDate(item.birthdate)}</td>
		</>
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
