const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const connect = require('gulp-connect')
const filter = require('gulp-filter')

// 打包页面js
gulp.task('pages-js', function (done) {
    const f = filter(['**/*.js', '!**/*.min.js'], { restore: true });
    gulp.src(['./src/pages/**/*.js'])
        .pipe(f)
        .pipe(babel({
            presets: [
                ['@babel/preset-env']
            ]
        }))
        .pipe(f.restore)
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
    done()
});