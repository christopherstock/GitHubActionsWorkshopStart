module.exports = {
    'testMatch': [
        '**/*.(test|spec).js',
    ],
    'collectCoverage': true,
    'coverageDirectory': 'public/coverage',
    'coverageThreshold': {
        'global': {
            'branches': 80,
            'functions': 80,
            'lines': 80,
            'statements': -10
        }
    },
    'reporters': [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'public',
                outputName: 'test-results.xml',
            }
        ]
    ]
};
