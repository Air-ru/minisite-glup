const gulp = require("gulp");
const open = require("gulp-open");
const connect = require("gulp-connect");
const os = require("os");
function getIPAdress() {
	var interfaces = os.networkInterfaces();
	for (var devName in interfaces) {
		var iface = interfaces[devName];
		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
				return alias.address;
			}
		}
	}
}
/*----------------------------------------------------------------------------------------------
	connect & Open Browser
 ----------------------------------------------------------------------------------------------*/

const myHost = getIPAdress();

gulp.task("connect", function () {
	connect.server({
		root: "./dist",
		livereload: true,
		host: myHost,
	});
});
gulp.task("uri", function () {
	gulp.src(__filename).pipe(open({ uri: `http://${myHost}:8080` }));
});
