/* eslint import/no-extraneous-dependencies: 0, import/no-unresolved: 0 */
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { FlatCompat } from '@eslint/eslintrc';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import StylisticPlugin from '@stylistic/eslint-plugin-ts';

import jsdoc from 'eslint-plugin-jsdoc';

const compat = new FlatCompat({
    baseDirectory: path.resolve('./'),
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

/** */
export default [
    jsdoc.configs['flat/recommended'],
    ...compat.extends('airbnb'),
    {
        ignores: [
            './docs/**/*.js',
            '**/*/*.spec.ts',
            '**/*/*.spec.tsx',
        ],
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
        },

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
                },
            },
        },

        plugins: {
            jsdoc,
        },

        rules: {
            indent: ['error', 4, {
                SwitchCase: 1,
            }],

            'security/detect-object-injection': ['off'],

            'import/prefer-default-export': 'off',

            'max-len': ['warn', {
                code: 100,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            }],

            'jsdoc/require-jsdoc': ['warn', {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: false,
                    FunctionExpression: true,
                },
            }],
            'jsdoc/require-param': ['warn', {
                enableFixer: false,
            }],
            'jsdoc/require-returns': 'off',
            'jsdoc/require-returns-description': 'off',
            'jsdoc/require-returns-type': 'warn',
            'jsdoc/no-undefined-types': 'off',

            'max-lines': ['warn', {
                max: 500,
                skipBlankLines: true,
                skipComments: true,
            }],

            'dot-location': ['error', 'property'],

            'newline-per-chained-call': ['error', {
                ignoreChainWithDepth: 2,
            }],

            'function-call-argument-newline': ['error', 'consistent'],

            'no-param-reassign': ['error', {
                props: true,
                ignorePropertyModificationsFor: ['session', 'req', 'res'],
            }],

            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-props-no-spreading': 'off',
            'react/no-danger': 'off',

            'react/jsx-no-useless-fragment': ['error', {
                allowExpressions: true,
            }],

            'react/jsx-filename-extension': ['error', {
                extensions: ['.tsx', '.ts'],
            }],

            'import/extensions': ['error', 'never', {
                pattern: {
                    mjs: 'always',
                },
            }],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],

        plugins: {
            '@typescript-eslint': tseslint.plugin,
            '@ts': StylisticPlugin,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2015,
            sourceType: 'script',

            parserOptions: {
                jsx: true,
                project: './tsconfig.json',
            },
        },

        rules: {
            ...(
                tseslint.configs.recommended
                    .map(({ rules }) => rules)
                    .filter((v) => v)
                    .reduce((obj, rules) => ({
                        ...obj,
                        ...rules,
                    }), {})
            ),

            'no-undef': 'off',

            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',

            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',

            indent: 'off',
            '@ts/indent': ['error', 4, {
                SwitchCase: 1,
            }],

            '@typescript-eslint/no-explicit-any': ['error', {
                fixToUnknown: true,
                ignoreRestArgs: true,
            }],

            '@ts/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'comma',
                    requireLast: true,
                },

                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },

                multilineDetection: 'brackets',
            }],
        },
    },
];
