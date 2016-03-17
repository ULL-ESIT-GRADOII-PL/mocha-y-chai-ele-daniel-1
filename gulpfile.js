var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');


gulp.task('compress', function() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('vendor'));
});


gulp.task('clean:minified', function () {
    return del([
        'dist/report.csv',
        // here we use a globbing pattern to match everything inside the `mobile` folder
        'dist/mobile/**/*',
        // we don't want to clean this file though so we negate the pattern
        '!dist/mobile/deploy.json'
    ]);
});

gulp.task('default', ['clean:minified']);
