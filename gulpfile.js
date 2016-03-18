var gulp   = require('gulp');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var webpack = require('webpack-stream');
var del = require('del');

var paths = {
  css: 'assets/css/*.css',
  // html: '///*.html',
  js: 'assets/js/*.js'
};

gulp.task('clean:minified', function () {
    return del([
        'vendor/*'
    ]);
});

gulp.task('html-min', function () {
  return gulp.src(paths.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./vendor'))
})

gulp.task('minify-css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('vendor'));
});

gulp.task('watch', function () {
  gulp.watch(paths.css, ['minify-css']);
  gulp.watch(paths.js, ['webpack']);
  //gulp.watch(paths.html, ['html-min']);
});

gulp.task('webpack', function() {
  return gulp.src(paths.js)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./vendor'));
});

gulp.task('default', ['watch']);
