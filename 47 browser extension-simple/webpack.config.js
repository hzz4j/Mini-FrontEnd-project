const path = require('path');
module.exports = {
    entry:{
        app: "./src/app.ts"
    },
    output:{
        publicPath: '/', // 能够访问静态资源
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext][query]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}