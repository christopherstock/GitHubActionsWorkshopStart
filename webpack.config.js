module.exports = (env, argv) => {
    let config = {
        entry: './src/server.js',
        output: {
            filename: 'app-bundle.js',
            path: __dirname + '/public/'
        },
        resolve: {
            extensions: [
                '.js',
                '.json'
            ]
        },
        target: 'node'
    };

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        config.optimization = {
            minimize: true
        };
    }

    config.module = {
        rules: [
        ]
    };

    return config;
};
