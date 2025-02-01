import { useContext } from 'react';
import clsx from 'clsx';

import { ThemeContext } from 'providers/ThemeProvider.jsx';
import Sun from 'ui/svg/sun/Sun.jsx';
import Moon from 'ui/svg/moon/Moon.jsx';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
	const [theme, setTheme] = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme((cv) => (cv === 'light' ? 'dark' : 'light'));
	};

	return (
		<label className={styles.switch}>
			<input
				type="checkbox"
				checked={theme === 'light'}
				onChange={toggleTheme}
			/>
			<span className={styles.slider}>
				<Sun
					className={clsx(styles.icon, styles.sun, {
						[styles.show]: !(theme === 'light'),
					})}
				/>
				<Moon
					className={clsx(styles.icon, styles.moon, {
						[styles.show]: theme === 'light',
					})}
				/>
			</span>
		</label>
	);
};

export default ThemeSwitcher;
