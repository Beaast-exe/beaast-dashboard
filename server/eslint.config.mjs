import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from 'globals';

export default [
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "commonjs",
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@stylistic/js': stylisticJs
		},
		rules: {
			'indent': ['error', 'tab'],
			'@stylistic/js/indent': ['error', 2],
			'no-undef': 'off',
			'quotes': ['error', 'single'],
			'semi': ['error', 'always']
		}
	},
	pluginJs.configs.recommended,
];