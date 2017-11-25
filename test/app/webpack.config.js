/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require('path');
const include = path.resolve(__dirname);

module.exports = {
  entry: './app.js',
  output: {
    path: include,
    libraryTarget: 'umd',
    filename: 'babel.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include,
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
    ],
  },
};
