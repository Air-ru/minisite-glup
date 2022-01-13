const gulp = require("gulp");
const runSequence = require("gulp4-run-sequence");
const handlebars = require("gulp-compile-handlebars");
const fs = require("fs");
const path = require("path");
const gutil = require("gulp-util");
const rename = require("gulp-rename");
const tap = require("gulp-tap");
const livereload = require("gulp-livereload");
const hbsHelpers = require("./gt-hbs-helpers");
const globalVars = require("../global-vars");

// prepare component
gulp.task("hbs-prep", () => {
	return gulp.src(["./src/components/**/*.hbs"]).pipe(
		tap((file) => {
			const src = "./src/" + path.relative("./src/", file.path).split(path.sep).slice(0, -1).join("/");
			globalVars.partialSRCs.push(src);
		})
	);
});

gulp.task("hbs-page", function (done) {
	const options = {
		ignorePartials: true,
		batch: globalVars.partialSRCs,
		helpers: hbsHelpers,
	};
	return gulp.src(globalVars.pagesSRCs).pipe(
		tap((file) => {
			const jsonPath =
				"./src/" + path.relative("./src/", file.path).split(path.sep).slice(0, -1).join("/") + "/index.json";
			const dataObject = JSON.parse(fs.readFileSync(jsonPath));
			// parse files
			gulp
				.src(file.path)
				.pipe(handlebars(dataObject, options))
				.pipe(
					rename({
						extname: ".html",
					})
				)
				.pipe(gulp.dest("dist"))
				.pipe(livereload());
		})
	);
});
// build
gulp.task("hbs-build", (done) => {
	runSequence("hbs-prep", "hbs-page");
	done();
});
