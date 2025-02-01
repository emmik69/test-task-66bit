import { FC, MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './ButtonBase.module.css';

type ButtonBaseProps = {
	children: ReactNode;
	onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

const ButtonBase: FC<ButtonBaseProps> = ({
	children,
	onClick,
	className = '',
}) => {
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
