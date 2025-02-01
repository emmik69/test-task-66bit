import clsx from 'clsx';

import styles from './InfoTag.module.css';

const InfoTag = ({ children, onClick = () => {}, className = '' }) => {
	return (
		<>
			<div className={clsx(styles.tag, className)} onClick={onClick}>
				{children}
			</div>
		</>
	);
};

export default InfoTag;
