import SelectFilter from 'ui/selects/selectFilter/SelectFilter.jsx';
import UniversalList from 'ui/others/universalList/UniversalList.jsx';

import styles from './FilterList.module.css';

const FilterList = ({ filterList, onChange }) => {
	return (
		<UniversalList
			items={filterList}
			renderItem={({ item }) => (
				<SelectFilter key={item.id} filter={item} onChange={onChange} />
			)}
			className={styles['list-filters']}
		/>
	);
};

export default FilterList;
