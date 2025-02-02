import { createRoot } from 'react-dom/client';

import { Providers } from '~~>app/providers';
import { App } from '~~>app/App';

import '~~>shared/assets/styles/reset.css';
import '~~>shared/assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<Providers>
		<App />
	</Providers>
);
