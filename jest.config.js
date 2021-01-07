module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/.next/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/__tests__/styleMock.js" },
}
