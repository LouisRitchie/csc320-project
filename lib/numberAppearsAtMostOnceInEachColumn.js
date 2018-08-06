"use strict";

function numberAppearsAtMostOnceInEachRow() {
  var result = [];

  for (var x = 1; x <= 9; x++) {
    for (var z = 1; z <= 9; z++) {
      var temp = [];

      for (var y = 1; y <= 8; y++) {
        for (var i = y + 1; i <= 9; i++) {
          temp.push([Number("-" + x + y + z), Number("-" + x + i + z)]);
        }
      }

      result.push.apply(result, temp);
    }
  }

  return result;
}

console.log(JSON.stringify(numberAppearsAtMostOnceInEachRow()));