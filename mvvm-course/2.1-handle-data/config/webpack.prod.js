const path = require('path');

const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = merge(baseConfig, prodConfig);
