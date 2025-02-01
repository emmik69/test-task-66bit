import { FC } from 'react';

import { type IFilter } from '~~>components/filterControl/filterControlData';
import FilterSelect from '~~>components/filterSelect/FilterSelect';
import UniversalList from '~~>ui/others/universalList/UniversalList';

import styles from './FilterList.module.css';

type FilterListProps = {
	filterList: IFilter[];
	onChange: (_id: number) => void;
};

const FilterList: FC<FilterListProps> = ({ filterList, onChange }) => {
	return (
		<UniversalList
			items={filterList}
			renderItem={(item) => (
				<FilterSelect key={item.id} filter={item} onChange={onChange} />
			)}
			className={styles['list-filters']}
		/>
	);
};

export default FilterList;
