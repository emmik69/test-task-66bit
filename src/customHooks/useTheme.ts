import { useState, useEffect, SetStateAction, Dispatch } from 'react';

const detectColorMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	)
		return 'dark';
	return 'light';
};

const getStorageThemeValue = (): string => {
	const savedTheme: string = localStorage.getItem('theme') ?? '""';
	const initial: string = JSON.parse(savedTheme);
	return initial || detectColorMode();
};

const useTheme = (): [string, Dispatch<SetStateAction<string>>] => {
	const [theme, setTheme] = useState<string>(getStorageThemeValue());

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
		if (theme === 'dark') document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
