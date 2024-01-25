import { defineConfig } from 'vitest/config';

export default {
	root: 'src',
	// test: /\.(spec|test)\.js$/i,
	test: {
		environment: "jsdom",
		coverage: {
			provider: 'v8',
			reportsDirectory: './__test__/coverage'
		}
	}
};
