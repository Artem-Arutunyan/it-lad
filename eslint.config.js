	
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	//подключаем плагины
	{
	plugins : {
		'@typescript-eslint': tseslint.plugin,
		'react-hooks' : eslintReactHooks,
		react : eslintReact,
		'react-refresh' : eslintReactRefresh,
		prettier: prettierPlugin
	}
	},
	//указываем папки, которые игнорируются ESLint
	{
	ignores: ['node_modules', 'dist', 'eslint.config.js', 'tailwind.config.js', 'postcss.config.js']
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	//указываем какой язык используем
	{
	languageOptions: {
		globals: {
		...globals.node,
		...globals.browser,
		...globals.es2021
		},
		parserOptions: {
		project: ['tsconfig.json', 'tsconfig.node.json'],
		}
	}
	},
	//указываем расширения файлов, на которые действует ESLint
	{
		files: ['**/*.{ts, tsx}'],
		
	},
	//правила prettier
	{
		
		rules: {
		...eslintConfigPrettier.rules,
		//'prefer-const' : 'off', //например, правило использовать const везде где можно
		}
	}
);
