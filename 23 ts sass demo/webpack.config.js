const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', /**指定model */
  entry: {
    app: './src/app.ts',  /**js入口文件为app.js */
    main: './src/main.ts'
  },
  devtool: 'inline-source-map', /**方便定位 */
  output: {
    filename: '[name].js',  /*生成的文件是app.js */
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "./",
    assetModuleFilename: 'images/[name][ext][query]', /** 图片输出到dist目录保持原样 */
    clean: true   /* 每次生成文件都清除dist下的旧文件 */
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['main','app'],
      filename: 'index.html'
    }),
  ],
};
