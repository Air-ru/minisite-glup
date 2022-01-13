const gulp = require("gulp");
const livereload = require("gulp-livereload");
gulp.task("watch", function (done) {
	livereload.listen();
	gulp.watch("./src/**/*.hbs", gulp.series(["hbs-build"]));
	gulp.watch(["./src/**/*.css", "./src/**/*.scss", "./src/**/*.sass"], gulp.series("css"));
	gulp.watch("./src/**/*", gulp.series("assets"));
	gulp.watch("./src/pages/**/*.js", gulp.series(["pages-js"]));
	gulp.watch("./src/pages/**/*.{png,jpg}", gulp.series(["images"]));
});
