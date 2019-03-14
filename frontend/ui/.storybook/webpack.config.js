const path = require('path');
module.exports = ({ config, mode }) => {
    config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'postcss-loader',
                ],
                include: path.resolve(__dirname, '../'),
            }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};