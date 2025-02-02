import { FC } from 'react';

import { UniversalList } from '~~>shared/ui/others';
import { type IFilter } from '~~>shared/model/types';

import FilterSelect from '../filterSelect/FilterSelect';
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
