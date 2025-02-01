import { FC } from 'react';

import { type IEmployee } from '~~>pages/employees/Employees';
import UniversalList from '~~>ui/others/universalList/UniversalList';

import { infoData } from './infoData';
import styles from './EmployeeMainInfo.module.css';

type EmployeeMainInfoProps = {
	user: IEmployee;
};

const EmployeeMainInfo: FC<EmployeeMainInfoProps> = ({ user }) => {
	const infoArray = infoData(user);
	return (
		<div className={styles['main-info']}>
			<p>Основная информация</p>
			<UniversalList
				items={infoArray}
				renderItem={(item) => (
					<div className={styles.info}>
						<p>{item.typeInfo}</p>
						<p>{item.value}</p>
					</div>
				)}
				className={styles['info-list']}
			/>
		</div>
	);
};

export default EmployeeMainInfo;
