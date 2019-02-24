//these have to be installed - for example npm install postcss-import --save-dev
var gulp = require('gulp');
var watch = require ('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log('hello world');
});

//this runs on gulp.start('html');;
gulp.task('html', function() {
  console.log('track html');
})

//this runs on gulp.start('styles');
gulp.task('styles', function() {
  //on css save get from src and save to dest
  return gulp.src('./app/assets/styles/styles.css') //source
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //support fot nested css, vars, auto prefixes
  .pipe(gulp.dest('./app/temp/styles')); //save to destination
})

//call gulp watch
gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
