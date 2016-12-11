  'use strict';

const env = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/app',

  entry: {
    main: [
      './main'
    ],
  },

  output: {
    path: __dirname + '/public/static',
    publicPath: '/static/',
    filename: '[name].js',
    library: '[name]'
  },

  devtool: env ? 'cheap-inline-module-source-map' : null,

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel?presets[]=react&presets[]=es2015',
      // query: {
      //   presets: ['react', 'es2015']
      // }
    },
    {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader!resolve-url!sass-loader?sourceMap')
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true, disable: env}),
  ],

  devServer: {
    contentBase: __dirname + '/public',
    hot: true
  }
};

if (env) {
  module.exports.entry.main.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  );
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (!env) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // don't show unreachable variables etc.
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
