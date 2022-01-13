"use strict";

var _utils = require("../../utils/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var a = 0;
var b = 1;
console.log(_utils.getBrowser);

var point = /*#__PURE__*/function () {
  function point(x, y) {
    _classCallCheck(this, point);

    this.x = x;
    this.y = y;
  }

  _createClass(point, [{
    key: "play",
    value: function play() {
      console.log("Hello World");
    }
  }]);

  return point;
}();

var yes = new point(1, 2);
yes.play();