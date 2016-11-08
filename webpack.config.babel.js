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

const
  isLibraryTarget = (options, target) => {
    return typeof options !== 'undefined'
      && typeof options.libraryTarget !== 'undefined'
      && options.libraryTarget === target;
  },
  isIe9 = (options) => {
    return isLibraryTarget(options, 'ie9');
  },
  isUmd = (options) => {
    return isLibraryTarget(options, 'umd');
  };

const entry = (options) => {
  return isIe9(options)
    ? {'bengor-cookies-ie9': './src/js/ie9'}
    : {'bengor-cookies': isUmd(options) ? './src/js/umd' : './src/js/index'};
};

export default (options) => {
  return {
    entry: entry(options),
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
      new ExtractTextPlugin('./../dist/[name].min.css'),
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
