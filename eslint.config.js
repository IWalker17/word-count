import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';

import { fileURLToPath } from 'node:url';

import globals from 'globals';
import js from '@eslint/js';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([globalIgnores([
    '**/node_modules/*',
    '**/vendor/*',
    '**/*.min.js',
    '**/coverage/*',
    '**/build/*',
]), {
    extends: compat.extends('eslint:recommended'),

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha,
            ...globals.browser,
            __API_URL__: false,
            __TITLE__: false,
            __DEBUG__: false,
        },

        ecmaVersion: 'latest',
        sourceType: 'module',

        parserOptions: {
            ecmaFeatures: {
                experimentalObjectRestSpread: true,
                module: true,
                jsx: true,
            },
        },
    },

    rules: {
        'react/prop-types': [0],

        quotes: ['error', 'single', {
            allowTemplateLiterals: true,
        }],

        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-var': 'error',
        'sort-imports': ['error', {
		    'ignoreCase': false,
		    'ignoreDeclarationSort': false,
		    'ignoreMemberSort': false,
		    'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
		    'allowSeparatedGroups': false,
        }],
        indent: ['error', 4, {
            'StaticBlock': {'body': 1},
            'ArrayExpression': 1,
            'ignoredNodes': ['ConditionalExpression'],
            'ImportDeclaration': 1,
            'flatTernaryExpressions': true,
            'MemberExpression': 1,
        }],
        semi: ['error', 'always'],
    },
}]);
