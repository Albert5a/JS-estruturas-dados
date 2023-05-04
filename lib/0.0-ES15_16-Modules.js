"use strict";

var _ = require("./1.0-CalcArea");
var _2 = _interopRequireDefault(require("./0.1-OutrosExemplos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log((0, _.circleArea)(2));
console.log((0, _.square)(2));
var myBook = new _2["default"]('Aloja');
myBook.printTitle();