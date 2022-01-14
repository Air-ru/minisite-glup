module.exports = {
	pictureName: function (src) {
		const index = src.lastIndexOf("."); //取到文件名开始到最后一个点的长度
		const fileNameLength = src.length; //取到文件名长度
		const fileFormat = src.substring(index + 1, fileNameLength); //截
		return fileFormat;
	},
	pictureSrc: function (src) {
		const index = src.lastIndexOf("."); //取到文件名开始到最后一个点的长度
		const fileNameLength = src.length; //取到文件名长度
		const fileFormat = src.substring(index + 1, fileNameLength); //截
		return fileFormat;
	},
};
