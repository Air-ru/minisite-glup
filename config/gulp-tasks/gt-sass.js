const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const runSequence = require('gulp4-run-sequence')
const connect = require('gulp-connect');
// 打包页面sass
gulp.task('pages-sass', function () {
    gulp.src(['./src/pages/**/css/*.scss', './src/pages/**/css/*.sass'])
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "IOS>=7",
                "Android>4.1",
                "Firefox>20",
                'last 2 version'
            ],
            cascade: true,
            remove: true
        }).on('error', sass.logError))
        // .pipe(cleancss({
        //     compatibility: '*'
        // }))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});
gulp.task('pages-css', function () {
    gulp.src(['./src/pages/**/css/*.css'])
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "IOS>=7",
                "Android>4.1",
                "Firefox>20",
                'last 2 version'
            ],
            cascade: true,
            remove: true
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});
gulp.task('css', function (done) {
    runSequence('pages-sass', 'pages-css')
    done()
});
