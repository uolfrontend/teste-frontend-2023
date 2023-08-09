module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/.jest/mocks/styleMock.js",
    "^@fontsource/roboto$": "<rootDir>/.jest/mocks/styleMock.js"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(.*?\\.css$|@fontsource/roboto))",
  ],
};
