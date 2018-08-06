"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// need to read in from stdin a sudoku puzzle
// should specify the format of sudoke puzzle with cline arg
// need to produce the ~8000 predicate disjunctions
// need to remove the unit predicates according to input puzzle
// need to output our data structure into CNF
// if input puzzle is empty, produce the ~8000 predicate disjunction in CNF


/*

Data structure for conjunction of clauses

[
  [ 111, 112, 113, 114, 115, ..., 119 ],
  ...
  [ -111, -115 ]
  ...
  [ -115, -125 ]
  ...
]

*/

/* SudokuCNF
 * A representation of a Sudoku board as ~8,800 booleans in Conjunctive Normal Form. Provides:
 *  - A data structure that is a Conjunctive Normal Form (CNF) representation of a Sudoku puzzle,
 *  - Static methods that accept strings that represent a Sudoku puzzle, parsing them into
 *      SudokuCNF's type of data structure.
 *  - Instance methods that affect the instance's data structure.
 *  - Instance methods that print out the represented Sudoku puzzle in various formats.
 *
 * Instantiate the class with
 */
var SudokuCNF = function () {
  // accepts our SudokuCNF structure to instantiate the class
  function SudokuCNF() {
    var _this = this;

    _classCallCheck(this, SudokuCNF);

    this.setTrue = function (index) {};

    this.toString = function () {
      console.log(JSON.stringify(_this.cnf));
    };

    this.cnf = cnf;
  }

  // INSTANCE METHODS

  /* sets to true the propositional variable at index. Every clause containing that propositional
   * variable has two outcomes: Remove that variable if it's negated & remove that clause if not.
   */


  _createClass(SudokuCNF, [{
    key: "parse",


    // STATIC METHODS

    value: function parse(string) {
      return [];
    }

    // returns the full SudokuCNF data structure.

  }, {
    key: "createFullCNF",
    value: function createFullCNF() {}
  }]);

  return SudokuCNF;
}();

exports.default = SudokuCNF;