const gulp = require('gulp')
const clean = require('gulp-clean');
const runSequence = require('gulp4-run-sequence')


gulp.task('clean', function () {
    return gulp.src(['./dist/*'])
        .pipe(clean());
});
gulp.task('build', (done) => {
    runSequence('clean', ['css', 'pages-js', 'images', 'html'])
    done()
});

gulp.task('default', (done) => {
    runSequence('clean', ['css', 'pages-js', 'images', 'assets', 'html'], ['connect', 'uri', 'watch'])
    done()
});


gulp.task('server', function (done) {
    runSequence('clean', ['css', 'pages-js', 'images', 'assets', 'html'], ['connect', 'uri', 'watch'])
    done()
});
require('require-dir')('./config/gulp-tasks');
