'use strict';

const webpack = require('webpack');
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin()
  ],
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/"
  },
  devServer:{
    hot:true,
    open: true,
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    port: 6666,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
};
