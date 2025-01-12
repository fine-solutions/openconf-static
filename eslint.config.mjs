import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules", "**/dist", "!**/.eleventy.js"],
}, ...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            JSDOM: "readonly",
        },

        ecmaVersion: 2020,
        sourceType: "module",
    },

    rules: {
        semi: ["warn", "never"],
    },
}];
