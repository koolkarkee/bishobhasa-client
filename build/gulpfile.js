'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
    //console.log('hello') 
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    
});
 
gulp.task('watch-saas', function () {
  return gulp.watch('./sass/**/*.scss', ['sass']);  
}); 
 