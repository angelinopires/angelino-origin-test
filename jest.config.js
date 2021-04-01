module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.s?css$': '<rootDir>/__mocks__/styleMock.ts',
    "~(.*)$": "<rootDir>/src/$1"
  },
  preset: 'ts-jest',
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testRegex: '.(test|spec).(jsx?|tsx?)$',
  transform: {
    '^.+\\.(js|ts)x?$': 'ts-jest',
  },
};
