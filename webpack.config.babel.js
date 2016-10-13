/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {join} from 'path';
import precss from 'precss';
import Webpack from 'webpack';

const include = join(__dirname, 'src');

const isUmd = (options) => {
  return typeof options !== 'undefined'
    && typeof options.libraryTarget !== 'undefined'
    && options.libraryTarget === 'umd';
};

export default (options) => {
  return {
    entry: [
      'babel-polyfill',
      isUmd(options) ? './src/js/umd' : './src/js/index',
    ],
    output: {
      path: join(__dirname, 'dist'),
      libraryTarget: isUmd(options) ? 'umd' : 'commonjs',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          include
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
      new ExtractTextPlugin('./../dist/bengor-cookies.min.css'),
      new Webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions']
            }),
            precss
          ],
          sassLoader: {
            includePaths: [join(__dirname, 'src/scss')]
          },
        }
      })
    ]
  }
};
