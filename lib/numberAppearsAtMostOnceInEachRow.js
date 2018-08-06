"use strict";

function numberAppearsAtMostOnceInEachRow() {
  var result = [];

  for (var y = 1; y <= 9; y++) {
    for (var z = 1; z <= 9; z++) {
      var temp = [];

      for (var x = 1; x <= 8; x++) {
        for (var i = x + 1; i <= 9; i++) {
          temp.push([Number("-" + x + y + z), Number("-" + i + y + z)]);
        }
      }

      result.push.apply(result, temp);
    }
  }

  return result;
}

console.log(JSON.stringify(numberAppearsAtMostOnceInEachRow()));