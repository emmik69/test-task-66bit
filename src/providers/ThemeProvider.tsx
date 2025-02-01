import { createContext, Dispatch, FC, ReactNode, SetStateAction } from 'react';

import useTheme from '~~>customHooks/useTheme';

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(['light', () => {}]);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useTheme();

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};
