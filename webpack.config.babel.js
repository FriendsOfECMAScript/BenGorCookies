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

const include = join(__dirname, 'src');

export default {
  entry: './src/js/umd',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'bengor-cookies'
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
        include
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    precss
  ],
  sassLoader: {
    includePaths: [join(__dirname, 'src/scss')]
  },
  plugins: [
    new ExtractTextPlugin('./../dist/bengor-cookies.min.css')
  ]
};
