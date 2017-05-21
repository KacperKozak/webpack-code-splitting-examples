const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },
  devtool: 'source-map'
};
