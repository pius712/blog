module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  'extends': [
    "eslint:recommended",`react-app`,
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-function": "off"
  }
};