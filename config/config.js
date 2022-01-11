const fs = require('fs');

module.exports = {
	stageBuild: false,
	partialSRCs: [],
	componentsSRCs: ['./src/html/components/**/*.hbs'],
	distAssets: {},
	rf(src, callback) {
		fs.readFile(src, 'utf8', (err, data) => {
			if (!err) {
				callback(data);
			} else {
				console.log('ERROR: ', err);
			}
		});
	},
	createDistFolder() {
		if (!fs.existsSync('dist')) {
			fs.mkdirSync('./dist');
		}
	}
};
