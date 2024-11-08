import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.all,
  {rules: {
    "no-magic-numbers": "off",
    "no-plusplus": "off",
    "no-ternary": "off",
    "one-var": "off",
    "strict": "off"
  }}
];