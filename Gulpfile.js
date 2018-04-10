'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let watch = require('gulp-watch');
let plumber = require('gulp-plumber');
let cssmin = require('gulp-cssmin');


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './docs',
    },
  });
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./docs'));
});

gulp.task('imagemin', function() {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./docs/images'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./docs/js'));
});

gulp.task('html', function() {
  return gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./docs'));
});

gulp.task('watch', ['js','sass','imagemin','html'],  function() {
  
  watch(['./src/sass/**/*.scss'], function() {
    gulp.start('sass');
  });
  watch(['./src/images/**/*'], function() {
    gulp.start('imagemin');
  });
  watch(['./src/scripts/**/*.js'], function() {
    gulp.start('js');
  });
  
  watch(['./src/**/*.html'], function() {
    gulp.start('html');
  });

  watch(['./docs/**/*'], function() {
    browserSync.reload();
  });
});

gulp.task('default', ['watch'], function() {
  gulp.start('serve');
});