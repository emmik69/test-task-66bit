import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
	plugins: [react()],
	resolve: {
		alias: {
			'~~>pages': '/src/pages',
			'~~>layouts': '/src/layouts',
			'~~>components': '/src/components',
			'~~>ui': '/src/ui',
			'~~>api': '/src/api',
			'~~>store': '/src/store',
			'~~>utils': '/src/utils',
			'~~>customHooks': '/src/customHooks',
			'~~>providers': '/src/providers',
			'~~>assets': '/src/assets',
		},
	},
	build: {
		rollupOptions: {
			output: {
				assetFileNames: 'assets/my-[name]-[hash][extname]',
				chunkFileNames: 'assets/my-[name]-[hash].js',
				entryFileNames: 'assets/my-[name]-[hash].js',
			},
		},
	},
	base: mode === 'production' ? '/test-task-66bit' : '',
}));
