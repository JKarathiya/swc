function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var a = null;
var b = null;
var c = null;
var d = null;
var e = null;
e = null; // ok
var E;
(function(E) {
    E[E["A"] = 0] = "A";
})(E || (E = {
}));
E.A = null; // error
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var f;
f = null; // ok
C = null; // error
var g;
g = null; // ok
I = null; // error
var M;
(function(M1) {
    M1.x = 1;
})(M || (M = {
}));
M = null; // error
var h = null;
function i(a1) {
    a1 = null;
}
i = null; // error