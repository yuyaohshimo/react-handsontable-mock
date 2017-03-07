var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: require.resolve('numbro'),
        loader: 'expose?numbro'
      }, {
        test: require.resolve('moment'),
        loader: 'expose?moment'
      }, {
        test: require.resolve('pikaday'),
        loader: 'expose?Pikaday'
      }, {
        test: require.resolve('zeroclipboard'),
        loader: 'expose?ZeroClipboard'
      }
    ]
  }
};
