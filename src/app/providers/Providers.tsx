import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '~~>app/store';
import { ThemeProvider } from '~~>entities/theme';

type ThemeProviderProps = {
	children: ReactNode;
};

const Providers: FC<ThemeProviderProps> = ({ children }) => {
	return (
		<ThemeProvider>
			<Provider store={store}>{children}</Provider>
		</ThemeProvider>
	);
};

export { Providers };
