module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["import"],
  extends: [
    "@react-native-community",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "error",
    quotes: ["warn", "double", { avoidEscape: true }],
    "no-var": "warn",
    "prefer-const": "warn",
    "comma-dangle": ["warn", "never"],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "import/order": "warn",
    "no-console": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useAsync|useAsyncFn)"
      }
    ]
  }
}
