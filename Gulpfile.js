'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let imagemin = require('gulp-imagemin');
let browserSync = require('browser-sync').create();
let pngquant = require('imagemin-pngquant');
// let mozjpeg = require('imagemin-mozjpeg');
let watch = require('gulp-watch');
let plumber = require('gulp-plumber');


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('imagemin', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin([
      pngquant({
        quality: '65-80',
        speed: 1,
      }),
      // mozjpeg
      imagemin.jpegtran({
        quality: 80,
      }),
      imagemin.svgo(),
      imagemin.gifsicle(),
    ]))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
  return gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./dist'));
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

  watch(['./dist/**/*'], function() {
    browserSync.reload();
  });
});

gulp.task('default', ['watch'], function() {
  gulp.start('serve');
});