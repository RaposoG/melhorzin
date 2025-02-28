import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  roots: ['<rootDir>'],
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.test.ts(x)?', '!src/**/*-stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  preset: 'ts-jest',
  setupFiles: ['jest-canvas-mock'],
  bail: 1,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.svg$': '<rootDir>/.jest/mocks/svgMock.ts',
    '@/(.*)': '<rootDir>/$1'
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const config = createJestConfig(customJestConfig);

export default config;
