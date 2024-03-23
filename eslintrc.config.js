// @ts-check

import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {},
      parser: tseslint.parser,
      parserOptions: { project: true },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "warn",
    },
    processor: {},
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {},
    settings: {},
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: [],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {},
      // parser: {},
      // parserOptions: {},
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "warn",
    },
    processor: {},
    plugins: {},
    rules: {},
    settings: {},
  },
);

// root: true,
// env: { browser: true, es2020: true },
// extends: [
//   'eslint:recommended',
//   'plugin:@typescript-eslint/recommended',
//   'plugin:react-hooks/recommended',
// ],
// ignorePatterns: ['dist', '.eslintrc.cjs'],
// parser: '@typescript-eslint/parser',
// plugins: ['react-refresh'],
// rules: {
//   'react-refresh/only-export-components': [
//     'warn',
//     { allowConstantExport: true },
//   ],
// },
