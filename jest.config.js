module.exports = {
	moduleDirectories: ['node_modules', 'src'],
	setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	coverageReporters: ['html'],
	coverageDirectory: 'report',
	testPathIgnorePatterns: ['./node_modules/'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	collectCoverageFrom: [
		'**/*.{ts, tsx}',
		'!**/types/**',
		'!**/styles/**',
		'!**/assets/**',
		'!**/node_modules/**',
		'!**/__tests__/**',
	],
};
