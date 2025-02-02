import { useState, useEffect, type SetStateAction, type Dispatch } from 'react';

import { Theme } from '../model/themeTypes';

const detectColorMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	)
		return Theme.Dark;
	return Theme.Light;
};

const getStorageThemeValue = (): Theme => {
	const savedTheme: string = localStorage.getItem('theme') ?? '""';
	const initial: Theme = JSON.parse(savedTheme);
	return initial || detectColorMode();
};

const useTheme = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
	const [theme, setTheme] = useState<Theme>(getStorageThemeValue());

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
		if (theme === 'dark') document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	}, [theme]);

	return [theme, setTheme];
};

export { useTheme };
