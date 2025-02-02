import clsx from 'clsx';
import { ChangeEvent, FC } from 'react';

import { Moon, Sun } from '~~>shared/ui/icons';

import styles from './Switcher.module.css';

type SwitcherProps = {
	state: boolean;
	onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

const Switcher: FC<SwitcherProps> = ({ state, onChange, className = '' }) => {
	return (
		<label className={clsx(styles.switch, className)}>
			<input type="checkbox" checked={state} onChange={onChange} />
			<span className={styles.slider}>
				<Sun
					className={clsx(styles.icon, styles.sun, {
						[styles.show]: !state,
					})}
				/>
				<Moon
					className={clsx(styles.icon, styles.moon, {
						[styles.show]: state,
					})}
				/>
			</span>
		</label>
	);
};

export { Switcher };
