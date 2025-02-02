import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

export default tseslint.config(
	importPlugin.flatConfigs.recommended,
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		settings: {
			'import/resolver': {
				node: {
					paths: ['node_modules', 'src'],
					extensions: ['.ts', '.tsx'],
				},
				alias: {
					map: [
						['~~>app', './src/app'],
						['~~>pages', './src/pages'],
						['~~>widgets', './src/widgets'],
						['~~>entities', './src/entities'],
						['~~>shared', './src/shared'],
					],
					extensions: ['.ts', '.tsx'],
				},
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'no-console': 'warn',
			'prefer-const': 'error',
			// 'no-unused-vars': 'off',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
				},
			],
			quotes: ['error', 'single'],
			'jsx-quotes': ['error', 'prefer-double'],
			'import/newline-after-import': [
				'error',
				{ count: 1, exactCount: true },
			],
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index', 'type', 'unknown'],
					],
					'newlines-between': 'always',
				},
			],
		},
	}
);
