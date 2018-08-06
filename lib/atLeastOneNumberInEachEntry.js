"use strict";

function atLeastOneNumberInEachEntry() {
  var result = [];

  for (var x = 1; x <= 9; x++) {
    for (var y = 1; y <= 9; y++) {
      var temp = [];

      for (var z = 1; z <= 9; z++) {
        temp.push(Number("" + x + y + z));
      }

      result.push(temp);
    }
  }

  return result;
}

console.log(JSON.stringify(atLeastOneNumberInEachEntry()));