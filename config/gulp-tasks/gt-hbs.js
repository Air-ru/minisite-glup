const gulp = require('gulp')
const handlebars = require('gulp-compile-handlebars')
const fs = require('fs')
const gutil = require('gulp-util')
const rename = require('gulp-rename')
const tap = require('gulp-tap')
const reload = require('gulp-connect').reload;
const hbsHelpers = require('./gt-hbs-helpers');




gulp.task('html', function (done) {
    gulp.src(['./src/pages/**/*.hbs'])
        .pipe(handlebars({}, {
            ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
            partials: {
                footer: '<footer>the end</footer>'
            },
            helpers: {
                capitals: function (str) {
                    return str.toUpperCase();
                }
            }
        }))
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest('dist'))
        .pipe(reload());
    done()
});

