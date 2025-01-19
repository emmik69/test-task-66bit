import clsx from 'clsx';

import styles from './ButtonBase.module.css';

const ButtonBase = ({ children, onClick = () => {}, className = '' }) => {
	return (
		<button
			className={clsx(styles['btn-base'], className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default ButtonBase;
