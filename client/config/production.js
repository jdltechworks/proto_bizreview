const webpack = require('webpack');
const path = require('path');

export default ({env, options}) => {
  return {
      entry: path.join(__dirname, '../src/index.js'),
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
      },
      module: {
        rules: [
          { test: /\.js$/, use: 'babel-loader' }
        ]
      },
      plugins: [
      ]
  }
};
