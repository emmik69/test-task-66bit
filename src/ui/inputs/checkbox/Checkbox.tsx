import { ChangeEvent, FC } from 'react';
import clsx from 'clsx';

import styles from './Checkbox.module.css';

export type CheckboxProps = {
	state: boolean;
	onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

const Checkbox: FC<CheckboxProps> = ({ state, onChange, className = '' }) => {
	return (
		<label className={clsx(styles['input-wrapper'], className)}>
			<input type="checkbox" checked={state} onChange={onChange} />
			<span className={styles['custom-input']}></span>
		</label>
	);
};

export default Checkbox;
