const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理模板index.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css

module.exports = {
  mode: 'development', /**指定model */
  entry: {
    app: './src/app.ts',  /**js入口文件为app.js */
    main: './src/ts/main.ts'
  },
  devtool: 'inline-source-map', /**方便定位 */
  output: {
    filename: 'js/[name].js',  /*生成的文件是app.js */
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/assets/",
    assetModuleFilename: 'images/[name][ext][query]', /** 图片输出到dist目录保持原样 */
    clean: true   /* 每次生成文件都清除dist下的旧文件 */
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",
          MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
       vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
      inject: true,
      chunks: ['main','app'],  // 需要main.js和app.js
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
};
