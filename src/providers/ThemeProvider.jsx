import { createContext } from 'react';

import useTheme from 'customHooks/useTheme';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useTheme();

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
