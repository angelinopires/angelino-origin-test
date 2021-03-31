module.exports = {
  bail: 1,
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.scss$': '<rootDir>/__mocks__/styleMock.ts',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '.(test|spec).(jsx?|tsx?)$',
  transform: {
    '^.+\\.(js|ts)x?$': 'ts-jest',
  },
  verbose: true,
}
