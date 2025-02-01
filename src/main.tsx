import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '~~>store/index.ts';
import { ThemeProvider } from '~~>providers/ThemeProvider';

import App from './App.tsx';
import '~~>assets/styles/reset.css';
import '~~>assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);
