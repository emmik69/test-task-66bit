import { FC, MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './InfoTag.module.css';

type InfoTagProps = {
	children: ReactNode;
	onClick?: (_e: MouseEvent<HTMLDivElement>) => void;
	className?: string;
};

const InfoTag: FC<InfoTagProps> = ({
	children,
	onClick = () => {},
	className = '',
}) => {
	return (
		<>
			<div className={clsx(styles.tag, className)} onClick={onClick}>
				{children}
			</div>
		</>
	);
};

export { InfoTag };
