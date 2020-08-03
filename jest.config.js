// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    ...tsjPreset.transform,
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!react-|@react-native-community|victory|react-native|rn-placeholder|redux-persist|@react-navigation|@react-native-firebase|@sentry/react-native).+\\.js$"
  ],
  cacheDirectory: ".jest-cache",
  coverageDirectory: ".jest-coverage",
  coveragePathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
  coverageReporters: ["html", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testPathIgnorePatterns: [
    "<rootDir>/packages/(?:.+?)/lib/",
    "<rootDir>/android/",
    "<rootDir>/ios/",
    "<rootDir>/node_modules/",
    "<rootDir>/lib/",
    "<rootDir>/e2e/"
  ],
  setupFiles: ["./testenv.js"]
}
