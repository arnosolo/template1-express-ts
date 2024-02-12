/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'], // Test all files end with .test.ts
  verbose: true, // Print log of every test
  forceExit: true, // Always force exit test
};