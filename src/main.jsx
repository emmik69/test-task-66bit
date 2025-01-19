import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'store';
import ThemeProvider from 'providers/ThemeProvider.jsx';

import App from './App.jsx';
import 'assets/styles/reset.css';
import 'assets/styles/index.css';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Provider>
);
