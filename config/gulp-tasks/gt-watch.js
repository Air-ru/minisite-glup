const gulp = require('gulp')

gulp.task("watch", function (done) {
    gulp.watch("./src/**/*.hbs", gulp.series(["html"]))
    gulp.watch(["./src/**/*.css", "./src/**/*.scss", "./src/**/*.sass"], gulp.series("css"))
    gulp.watch("./src/**/*", gulp.series("assets"))
    gulp.watch("./src/pages/**/*.js", gulp.series(["pages-js"]))
    gulp.watch("./src/pages/**/*.{png,jpg}", gulp.series(["images"]))
    done()
})