const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const responsive = require("gulp-responsive");
const connect = require("gulp-connect");
gulp.task("images", (done) =>
	gulp
		.src("./src/pages/**/*.{png,jpg}")
		.pipe(
			responsive(
				{
					"**/*.jpg": [
						{ rename: { suffix: "@2x", extname: ".jpg" }, quality: 100 },
						{ width: "50%", rename: { extname: ".jpg" }, quality: 100 },
						{ width: "10%", rename: { extname: "_thumb.jpg" }, quality: 5 },
						{ rename: { suffix: "@2x", extname: ".webp" }, quality: 100 },
						{ width: "50%", rename: { extname: ".webp" }, quality: 100 },
					],
					"**/*.png": [
						{ rename: { suffix: "@2x", extname: ".png" }, quality: 100 },
						{ width: "50%", rename: { extname: ".png" }, quality: 100 },
						{ width: "10%", rename: { extname: "_thumb.png" }, quality: 5 },
						{ rename: { suffix: "@2x", extname: ".webp" }, quality: 100 },
						{ width: "50%", rename: { extname: ".webp" }, quality: 100 },
					],
				},
				{
					blur: false,
					progressive: false,
					withMetadata: false,
					withoutEnlargement: true,
					errorOnUnusedConfig: false,
					errorOnUnusedImage: false,
				}
			)
		)
		.pipe(
			imagemin(
				[
					imagemin.mozjpeg({ progressive: true }),
					imagemin.optipng(),
					imagemin.svgo([{ removeViewBox: false }, { minifyStyles: false }]),
				],
				{ verbose: true }
			)
		)
		.pipe(gulp.dest("./dist/"))
		.pipe(connect.reload())
);
