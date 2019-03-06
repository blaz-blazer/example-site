//these have to be installed - for example npm install gulp-postcss --save-dev
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

//this runs on gulp.start('styles');
gulp.task('styles', function() {
  //on css save get from src and save to dest
  return gulp.src('./app/assets/styles/styles.css') //source
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) //support fot nested css, vars, auto prefixes
  //error handling
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles')); //save to destination
})
