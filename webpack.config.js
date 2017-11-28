/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const precss = require('precss');
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          presets: [
            [
              'env',
              {
                'targets': {
                  'ie': 9,
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.(s?css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  autoprefixer({browsers: ['last 2 versions']}),
                  cssNano(),
                  precss(),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin('./../dist/[name].css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src/scss')],
        },
      },
    }),
  ],
};

module.exports = [Object.assign({
  entry: {
    'bengor-cookies.ie9': './src/js/ie9.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bengor-cookies.ie9.js',
    libraryTarget: 'umd',
  },
}, config), Object.assign({
  entry: {
    'bengor-cookies.modern': './src/js/modern.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bengor-cookies.modern.js',
    libraryTarget: 'umd',
  }
}, config), Object.assign({
  entry: {
    'bengor-cookies': './src/js/umd.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bengor-cookies.umd.js',
    libraryTarget: 'umd',
  },
}, config)];
