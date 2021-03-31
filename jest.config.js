module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.scss$': '<rootDir>/tests/styleMock.ts',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testRegex: '.(test|spec).(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
}
