const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');
const fs = require('fs');
const path = require('path');
// const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');

/*----------------------------------------------------------------------------------------------
	Assets Files
 ----------------------------------------------------------------------------------------------*/

gulp.task('copy-video', () => {
	return gulp.src(['src/pages/**/*.mp4'])
		// .pipe(imagemin())
		.pipe(gulp.dest('dist/')).pipe(connect.reload());
});

// gulp.task('copy-js', () => {
// 	return gulp.src(['src/js/**/*'])
// 		.pipe(gulp.dest('dist/js')).pipe(connect.reload());
// });

gulp.task('assets', (done) => {
	runSequence('copy-video');
	done()
});
