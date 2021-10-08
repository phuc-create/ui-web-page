module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'indent'           : [1, 4],
        'space-unary-ops'  : 2,
        // 'react/prop-types': 'off'
    }
}
