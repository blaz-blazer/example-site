//these have to be installed - for example npm install gulp-watch --save-dev
var gulp = require('gulp');
var watch = require ('gulp-watch');
var browserSync = require('browser-sync').create();
//call gulp watch
gulp.task('watch', function() {
  //browser sync
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app" //proxy   : "http://localhost/YOURDOMAIN" for wamp
    }
  })

  //watch html and run task on change - browser sync
  watch('./app/index.html', function() {
    browserSync.reload();
  });
  //watch css and run task on change - cssInject
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

//auto inject latest css - styles is dependency - it runs the styles task
gulp.task('cssInject',['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
})
