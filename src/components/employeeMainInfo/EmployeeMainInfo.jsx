import UniversalList from 'ui/others/universalList/UniversalList.jsx';

import { infoData } from './infoData';
import styles from './EmployeeMainInfo.module.css';

const EmployeeMainInfo = ({ user }) => {
	const infoArray = infoData(user);
	return (
		<div className={styles['main-info']}>
			<p>Основная информация</p>
			<UniversalList
				items={infoArray}
				renderItem={({ item }) => (
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
