'use strict';

// var EPSILON = 1e-9;
// var abs = Math.abs;

module.exports = function equals(p1, p2) {
  if (p1[0] === p2[0]) {
    if (p1[1] === p2[1]) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

// TODO https://github.com/w8r/martinez/issues/6#issuecomment-262847164
// Precision problem.
//
// module.exports = function equals(p1, p2) {
//   return abs(p1[0] - p2[0]) <= EPSILON && abs(p1[1] - p2[1]) <= EPSILON;
// };
