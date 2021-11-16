module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest/setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': './jest/style-mock.js',
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
}
