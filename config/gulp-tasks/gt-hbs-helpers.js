const handlebars = require("gulp-compile-handlebars");
const globalVars = require("../global-vars");

module.exports = {
	compare: function (v1, operator, v2) {
		switch (operator) {
			case "==":
				return v1 === v2;
			case "===":
				return v1 === v2;
			case "!=":
				return v1 !== v2;
			case "!==":
				return v1 !== v2;
			case "<":
				return v1 < v2;
			case "<=":
				return v1 <= v2;
			case ">":
				return v1 > v2;
			case ">=":
				return v1 >= v2;
			case "&&":
				return v1 && v2;
			case "||":
				return v1 || v2;
			default:
				throw new Error("helper {{compare}}: invalid operator " + operator);
		}
	},
};
