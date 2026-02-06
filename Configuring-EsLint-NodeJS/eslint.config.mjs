import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  // Recommended ESLint rules
  js.configs.recommended,

  // Apply Node globals and language options
  {
    files: ["**/*.js"],

    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module"
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
]);