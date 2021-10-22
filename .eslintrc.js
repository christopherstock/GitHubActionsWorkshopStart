module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017
    },
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'jest': true,
    },
    rules: {
        'indent': ['error', 4],
        'max-len': ['error', {'code': 120}],
        'quotes': ['error', 'single'],
        'no-trailing-spaces': ['error'],
        'space-before-function-paren': ['error'],
        'array-bracket-spacing': ['error'],
        'object-curly-spacing': ['error'],
        'space-in-parens': ['error'],
        'no-multiple-empty-lines': 'error',
    }
};
