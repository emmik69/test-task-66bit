import { FC } from 'react';
import clsx from 'clsx';

import { Checkbox, type CheckboxProps } from '~~>shared/ui/inputs';

import styles from './FilterItem.module.css';

type FilterItemProps = {
	className: string;
	title: string;
} & CheckboxProps;

const FilterItem: FC<FilterItemProps> = ({
	className = '',
	title,
	...props
}) => {
	return (
		<label className={clsx(styles['filter-item'], className)}>
			{title}
			<Checkbox {...props} />
		</label>
	);
};

export { FilterItem };
