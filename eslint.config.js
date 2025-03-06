import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-node';
import promisePlugin from 'eslint-plugin-promise';

export default [
	{
		ignores: ['**/dist/**'],
	},
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsparser,
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.es2021,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			import: importPlugin,
			node: nodePlugin,
			promise: promisePlugin,
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': ['error', { useTabs: true }],
			'import/no-unresolved': 'off',
			'node/no-unsupported-features/es-syntax': 'off',
			'promise/always-return': 'warn',
			'no-console': 'off',
			'no-undef': 'off',
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.ts'],
				},
			},
		},
	},
	prettier,
];
