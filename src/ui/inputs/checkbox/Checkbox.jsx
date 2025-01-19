import clsx from 'clsx';

import styles from './Checkbox.module.css';

const Checkbox = ({ state = false, onChange = () => {}, className = '' }) => {
	return (
		<label className={clsx(styles['input-wrapper'], className)}>
			<input type="checkbox" checked={state} onChange={onChange} />
			<span className={styles['custom-input']}></span>
		</label>
	);
};

export default Checkbox;
