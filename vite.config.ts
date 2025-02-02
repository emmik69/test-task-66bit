import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
	plugins: [react()],
	resolve: {
		alias: {
			'~~>app': '/src/app',
			'~~>pages': '/src/pages',
			'~~>widgets': '/src/widgets',
			'~~>entities': '/src/entities',
			'~~>shared': '/src/shared',
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
