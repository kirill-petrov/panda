module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-unused-vars': process.env.NODE_ENV !== 'production' ? 'warn' : 'error',
    'no-unused-expressions': 'warn',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
  },
};
