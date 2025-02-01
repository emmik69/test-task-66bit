import clsx from 'clsx';

import Checkbox from 'ui/inputs/checkbox/Checkbox.jsx';

import styles from './FilterItem.module.css';

const FilterItem = ({ className = '', title, ...props }) => {
	return (
		<label className={clsx(styles['filter-item'], className)}>
			{title}
			<Checkbox {...props} />
		</label>
	);
};

export default FilterItem;
