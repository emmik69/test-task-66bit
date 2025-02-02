import { FC } from 'react';

import { FilterItem } from '~~>shared/ui/others';
import { UniversalSelect } from '~~>shared/ui/selects';
import { type IFilter } from '~~>shared/model/types';

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
