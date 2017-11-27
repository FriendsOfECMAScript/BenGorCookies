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
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const precss = require('precss');
const webpack = require('webpack');

const include = path.resolve(__dirname, 'src');

const
  isLibraryTarget = (options, target) => {
    return typeof options !== 'undefined'
      && typeof options.libraryTarget !== 'undefined'
      && options.libraryTarget === target;
  },
  isIe9 = (options) => {
    return isLibraryTarget(options, 'ie9');
  };

const entry = (options) => {
  return isIe9(options)
    ? {'bengor-cookies.ie9': './src/js/ie9'}
    : {'bengor-cookies': './src/js/umd'};
};

module.exports = (options) => {
  return {
    entry: entry(options),
    output: {
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include,
          options: {
            presets: [
              [
                "env",
                {
                  "targets": {
                    "ie": 9,
                  }
                }
              ]
            ]
          }
        },
        {
          test: /\.(s?css)$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!postcss-loader!sass-loader'
          }),
          include
        }
      ]
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
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions']
            }),
            precss
          ],
          sassLoader: {
            includePaths: [path.resolve(__dirname, 'src/scss')]
          },
        }
      })
    ]
  }
};
