const path = require('path');

module.exports = {
  entry: {
    main: './src/index',
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:5]',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
};
