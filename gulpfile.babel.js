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

import gulp from 'gulp';
import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import cssnext from 'postcss-cssnext';
import cssnano from 'gulp-cssnano';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

const
  paths = {
    npm: './node_modules',
    sass: './src/scss',
    js: './src/js',
    dist: './dist',
    lib: './lib'
  },
  watch = {
    sass: './src/scss/**/*.scss',
    js: './src/js/**/*.js'
  };

// Plumber error function
function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('sass', () => {
  return gulp.src(`${paths.sass}/bengor-cookies.scss`)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(postcss([cssnext]))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('sass:prod', () => {
  return gulp.src(`${paths.sass}/bengor-cookies.scss`)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
    .pipe(postcss([cssnext]))
    .pipe(cssnano({
      keepSpecialComments: 1,
      rebase: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('js:lib', () => {
  return gulp.src([
    `${paths.js}/**/*.js`,
    `!${paths.js}/app.js`
  ])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.lib));
});

gulp.task('js:dist', () => {
  return browserify(`${paths.js}/app.js`)
    .transform('babelify', {presets: ['es2015'], comments: false})
    .bundle()
    .pipe(source('bengor-cookies.js'))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('js:dist:prod', () => {
  return browserify(`${paths.js}/app.js`)
    .transform('babelify', {presets: ['es2015'], comments: false})
    .bundle()
    .pipe(source('bengor-cookies.min.js'))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(buffer())
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
  gulp.watch(watch.sass, ['sass']);
  gulp.watch(watch.js, ['js:dist', 'js:lib']);
});

gulp.task('default', ['sass', 'js:dist', 'js:dist:prod', 'js:lib']);

gulp.task('prod', ['sass:prod', 'js:dist', 'js:dist:prod', 'js:lib']);
