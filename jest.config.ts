/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: "Test Report"
    }],
  ],
  //setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default config;
