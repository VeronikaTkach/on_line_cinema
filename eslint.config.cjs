module.exports = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'], //какие файлы должны проверяться
    ignores: ['dist', '.eslintrc.cjs'], //какие файлы не должны проверяться
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      globals: {
        window: true,
        document: true,
      },
    },
    settings: {
      react: {
        version: 'detect', //позволяет eslint определить версию реакта
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      prettier: require('eslint-plugin-prettier'),
      'react-refresh': require('eslint-plugin-react-refresh'),
      tailwindcss: require('eslint-plugin-tailwindcss'),
      'react/jsx-boolean-value': ['error', 'never'],
      '@typescript-eslint/no-inferrable-types': 'warn',
      'react-hooks/exhaustive-deps': 'warn'
      
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'prefer-const': 'warn',

    },
  },
];
