const gulp            = require('gulp'),
      sass            = require('gulp-sass'),
      sourcemaps      = require('gulp-sourcemaps'),
      autoprefixer    = require('gulp-autoprefixer'),
      imagemin        = require('gulp-imagemin'),
      useref          = require('gulp-useref'),
      gulpif          = require('gulp-if'),
      uglify          = require('gulp-uglify'),
      babel           = require('gulp-babel'),
      uncss           = require('gulp-uncss'),
      browserSync     = require('browser-sync').create();

      gulp.task('css', function() {
        return gulp.src('src/sass/**/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('dist/css'))
      });

      gulp.task('copy', function(){
        return gulp.src('src/**/*html')
          .pipe(gulp.dest('dist'))
      });
