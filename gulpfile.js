var gulp   = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('vendor'));
});

