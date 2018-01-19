const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
];

module.exports = {
  entry: {
    bundle: ['./src/app/index.js', './src/scss/main.scss'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new HtmlWebpackPlugin({
      template: './index.template.html',
      filename: 'index.html',
      appMountId: 'main',
    }),
  ],
};
