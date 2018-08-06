"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function numberAppearsAtMostOnceInEach3x3Cube() {
  return [].concat(_toConsumableArray(noVerticalDuplicates()), _toConsumableArray(noHorizontalDuplicates()));
}

function noVerticalDuplicates() {
  var result = [];

  for (var z = 1; z <= 9; z++) {
    for (var i = 0; i <= 2; i++) {
      for (var j = 0; j <= 2; j++) {
        var temp = [];

        for (var x = 1; x <= 3; x++) {
          for (var y = 1; y <= 3; y++) {
            for (var k = y + 1; k <= 3; k++) {
              temp.push([Number("-" + (3 * i + x) + (3 * j + y) + z), Number("-" + (3 * i + x) + (3 * j + k) + z)]);
            }
          }
        }

        result.push.apply(result, temp);
      }
    }
  }

  return result;
}

function noHorizontalDuplicates() {
  var result = [];

  for (var z = 1; z <= 9; z++) {
    for (var i = 0; i <= 2; i++) {
      for (var j = 0; j <= 2; j++) {
        var temp = [];

        for (var x = 1; x <= 3; x++) {
          for (var y = 1; y <= 3; y++) {
            for (var k = y + 1; k <= 3; k++) {
              for (var l = 1; l <= 3; l++) {
                temp.push([Number("-" + (3 * i + x) + (3 * j + y) + z), Number("-" + (3 * i + k) + (3 * j + l) + z)]);
              }
            }
          }
        }

        result.push.apply(result, temp);
      }
    }
  }

  return result;
}

console.log(JSON.stringify(numberAppearsAtMostOnceInEach3x3Cube()));