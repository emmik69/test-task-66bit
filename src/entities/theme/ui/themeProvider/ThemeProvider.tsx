import { FC, ReactNode } from 'react';

import { useTheme } from '../../lib/useTheme';
import { ThemeContext } from '../../config/themeContext';

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useTheme();

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };
