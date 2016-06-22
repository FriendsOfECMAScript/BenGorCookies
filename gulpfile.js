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

var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  cssnext = require('postcss-cssnext'),
  cssnano = require('gulp-cssnano'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

var paths = {
  npm: './node_modules',
  sass: './src/scss',
  js: './src/js',
  dist: './dist'
};

var watch = {
  sass: './src/scss/**/*.scss',
  js: './src/js/**/*.js'
};

// Plumber error function
function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src(paths.sass + '/bengor-cookies.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(postcss([cssnext]))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('sass:prod', function () {
  return gulp.src(paths.sass + '/bengor-cookies.scss')
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

gulp.task('js', function () {
  return gulp.src(paths.js + '/*.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('js:prod', function () {
  return gulp.src(paths.js + '/*.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('bengor-cookies.min.js'))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function () {
  gulp.watch(watch.sass, ['sass']);
  gulp.watch(watch.js, ['js']);
});

gulp.task('default', ['sass', 'js']);

gulp.task('prod', ['sass:prod', 'js:prod']);
