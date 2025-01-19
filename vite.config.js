import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			pages: '/src/pages',
			layouts: '/src/layouts',
			components: '/src/components',
			ui: '/src/ui',
			api: '/src/api',
			store: '/src/store',
			utils: '/src/utils',
			customHooks: '/src/customHooks',
			providers: '/src/providers',
			assets: '/src/assets',
		},
	},
	base: '/test-task-66bit',
});
