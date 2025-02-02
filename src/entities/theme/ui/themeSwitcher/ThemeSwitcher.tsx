import { useContext } from 'react';

import { Switcher } from '~~>shared/ui/inputs';

import { ThemeContext } from '../../config/themeContext';
import { Theme } from '../../model/themeTypes';

const ThemeSwitcher = () => {
	const [theme, setTheme] = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme((cv) => (cv === Theme.Light ? Theme.Dark : Theme.Light));
	};

	return <Switcher state={theme === Theme.Light} onChange={toggleTheme} />;
};

export { ThemeSwitcher };
