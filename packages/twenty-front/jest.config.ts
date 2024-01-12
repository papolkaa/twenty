export default {
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest',
  },
  moduleNameMapper: {
    '~/(.+)': '<rootDir>/src/$1',
    '@/(.+)': '<rootDir>/src/modules/$1',
    '@testing/(.+)': '<rootDir>/src/testing/$1',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/imageMock.js',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  coverageThreshold: {
    global: {
      statements: 10,
      lines: 10,
      functions: 7,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/object-record/object-filter-dropdown/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    'states/.+State.ts$',
    'states/selectors/*',
    'contexts/.+Context.ts',
    'testing/*',
    'tests/*',
    'config/*',
    'graphql/queries/*',
    'graphql/mutations/*',
    'graphql/fragments/*',
    'types/*',
    'constants/*',
    'generated-metadata/*',
    'generated/*',
    '__stories__/*',
    'display/icon/index.ts',
  ],
  // coverageDirectory: '<rootDir>/coverage/',
};
