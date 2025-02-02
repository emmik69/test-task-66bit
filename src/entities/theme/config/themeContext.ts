import { createContext, type Dispatch, type SetStateAction } from 'react';

import { Theme } from '../model/themeTypes';

const ThemeContext = createContext<[Theme, Dispatch<SetStateAction<Theme>>]>([
	Theme.Light,
	() => {},
]);

export { ThemeContext };
