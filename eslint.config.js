import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**', 'allure-results/**', 'allure-report/**', 'screenshots/**'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.spec.ts', '**/*.test.ts'],
		plugins: { playwright },
		rules: {
			'playwright/no-focused-test': 'error',
			'playwright/no-skipped-test': 'warn',
			'playwright/no-page-pause': 'error',
			'playwright/valid-expect': 'error',
		},
	},
);
