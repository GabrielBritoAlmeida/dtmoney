module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  testEnvironment: 'jsdom'
}
