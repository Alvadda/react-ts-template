module.exports = {
  root: true,

  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],

  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    // 'prettier',
    'airbnb',
    "airbnb-typescript",
  ],
  rules: {
    semi: 'never',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    "import/order": ["error", { "newlines-between": "always" }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     "trailingComma": "es5",
    //     "tabWidth": 2,
    //     "semi": false,
    //     "singleQuote": true,
    //     "bracketSpacing": true,
    //     "arrowParens": "always",
    //     "printWidth": 140,
    //     "useTabs": false,
    //     "proseWrap": "always",
    //     "endOfLine": "auto"
    //   },
    // ],
  },
}
