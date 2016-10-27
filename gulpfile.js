var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function () {
  return gulp.src('src/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/'] // String or Array
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});




gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('watch', ['browserSync', 'sass', 'nunjucks'], function (){
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['nunjucks']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

// gulp.task('default', function (){
//   gulp.watch();
// });