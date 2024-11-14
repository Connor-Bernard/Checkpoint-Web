/* eslint-disable no-magic-numbers */
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import js from '@eslint/js';
import path from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends('eslint:recommended'),
    {
        plugins: {
            import: importPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.node,
            },

            ecmaVersion: 12,
            sourceType: 'module',
        },

        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'consistent-return': 'warn',
            'import/no-deprecated': 'error',
            'import/no-empty-named-blocks': 'error',
            'import/no-extraneous-dependencies': 'error',
            'import/no-mutable-exports': 'warn',
            'import/default': 'error',
            'import/named': 'error',
            'import/namespace': 'error',
            'import/no-cycle': 'error',
            'import/no-self-import': 'error',
            'import/no-unresolved': 'error',
            'import/no-useless-path-segments': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-unused-expressions': 'warn',
            'no-else-return': 'warn',
            'no-constructor-return': 'error',
            'no-duplicate-imports': 'error',
            'no-self-compare': 'error',
            'no-unmodified-loop-condition': 'warn',
            'no-unreachable-loop': 'warn',
            'no-use-before-define': 'error',
            'no-useless-assignment': 'warn',
            camelcase: 'error',
            'capitalized-comments': ['error', 'always'],
            'default-case-last': 'error',
            'default-param-last': 'error',
            'dot-notation': 'error',
            eqeqeq: 'error',
            'func-style': [
                'error',
                'declaration',
                { allowArrowFunctions: true },
            ],
            'grouped-accessor-pairs': 'warn',
            'max-depth': ['warn', 4],
            'max-lines': ['warn', 300],
            'max-lines-per-function': ['warn', 30],
            'max-nested-callbacks': ['warn', 4],
            'max-params': ['warn', 5],
            'max-statements': ['warn', 20],
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-invalid-this': 'warn',
            'no-labels': 'error',
            'no-lone-blocks': 'warn',
            'no-lonely-if': 'error',
            'no-magic-numbers': [
                'warn',
                {
                    ignore: [0, 1],
                    ignoreArrayIndexes: true,
                    ignoreDefaultValues: true,
                    enforceConst: true,
                },
            ],
            'no-multi-assign': 'error',
            'no-negated-condition': 'error',
            'no-param-reassign': 'error',
            'no-proto': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'warn',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'no-warning-comments': [
                'warn',
                { terms: ['todo', 'fixme'], location: 'start' },
            ],
            'operator-assignment': ['warn', 'always'],
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-exponentiation-operator': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'require-await': 'warn',
            'sort-imports': ['warn', { allowSeparatedGroups: true }],
            yoda: 'error',
        },
    },
];
