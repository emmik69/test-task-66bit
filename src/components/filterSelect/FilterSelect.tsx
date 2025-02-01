import { FC } from 'react';

import { type IFilter } from '~~>components/filterControl/filterControlData';
import FilterItem from '~~>ui/others/filterItem/FilterItem';
import UniversalSelect from '~~>ui/selects/universalSelect/UniversalSelect';

import styles from './FilterSelect.module.css';

type SelectFilterProps = {
	filter: IFilter;
	onChange: (_id: number) => void;
};

const FilterSelect: FC<SelectFilterProps> = ({ filter, onChange }) => {
	return (
		<UniversalSelect
			name={filter.name}
			data={filter.categories}
			renderItem={(item) => (
				<FilterItem
					className={styles['filter-item']}
					title={item.title}
					state={item.state}
					onChange={() => onChange(item.id)}
				/>
			)}
		/>
	);
};

export default FilterSelect;
