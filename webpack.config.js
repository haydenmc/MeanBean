const path = require('path');

module.exports = {
    entry: './src/game',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './wwwroot'),
    },
};
