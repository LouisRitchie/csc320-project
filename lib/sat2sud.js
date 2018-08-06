'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Readline = require('readline');
var atLeastOneNumberInEachEntry = require('./atLeastOneNumberInEachEntry.json');
var numberAppearsAtMostOnceInEachRow = require('./numberAppearsAtMostOnceInEachRow.json');
var numberAppearsAtMostOnceInEachColumn = require('./numberAppearsAtMostOnceInEachColumn.json');
var numberAppearsAtMostOnceInEach3x3Grid = require('./numberAppearsAtMostOnceInEach3x3Grid.json');

/* SudokuCNF
 * A representation of a Sudoku board as ~8,800 booleans in Conjunctive Normal Form. Provides:
 *  - A data structure that is a Conjunctive Normal Form (CNF) representation of a Sudoku puzzle,
 *  - Static methods that accept strings that represent a Sudoku puzzle, parsing them into
 *      SudokuCNF's type of data structure.
 *  - Instance methods that affect the instance's data structure.
 *  - Instance methods that print out the represented Sudoku puzzle in various formats.
 *
 */

var SudokuCNF = function () {
  // accepts our SudokuCNF structure to instantiate the class
  function SudokuCNF(cnf) {
    var _this = this;

    _classCallCheck(this, SudokuCNF);

    this.setTrue = function (index) {
      var negativeIndex = -index;
      for (var i = 0; i < _this.cnf.length; i++) {
        if (_this.cnf[i].includes(negativeIndex)) {
          if (_this.cnf[i].length === 1) {
            _this.cnf.splice(i, 1);
            i--;
            continue;
          } else {
            _this.cnf[i].splice(_this.cnf[i].indexOf(negativeIndex), 1);
          }
        }

        if (_this.cnf[i].includes(index)) {
          _this.cnf.splice(i, 1);
          i--;
        }
      }
    };

    this.toString = function () {
      var clauseCount = _this.cnf.length;
      var result = 'p cnf ' + _this.variableCount + ' ' + _this.cnf.length + '\n';

      for (var i = 0; i < clauseCount; i++) {
        result = '' + result + _this.cnf[i].reduce(function (acc, curr) {
          return curr + ' ' + acc;
        }, '0\n');
      }

      return result;
    };

    this.cnf = SudokuCNF.createFullCNF();
    this.variableCount = 729;
  }

  /* sets to true the propositional variable at index. Every clause containing that propositional
   * variable has two outcomes: Remove that variable if it's negated & remove that clause if not.
   */


  _createClass(SudokuCNF, [{
    key: 'parse',
    value: function parse(string) {
      var result = [];
      var content = '';

      var rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
      });

      rl.on('line', function (line) {
        if (content === '') {
          content = line;
        } else {
          content = content + '\n' + line;
        }
      });

      rl.on('close', function () {
        var _content$split = content.split('*'),
            _content$split2 = _slicedToArray(_content$split, 2),
            grid = _content$split2[0],
            output = _content$split2[1];

        grid.split('\n').map(function (line, i) {
          return line.split('').map(function (digit, j) {
            if (digit !== '0') {
              result.push(Number('' + (j + 1) + (i + 1) + digit));
            }
          });
        });

        output = output.split(' ').filter(function (num) {
          return Number(num) > 0;
        }).map(function (num) {
          var _num$split = num.split(''),
              _num$split2 = _slicedToArray(_num$split, 3),
              char1 = _num$split2[0],
              char2 = _num$split2[1],
              char3 = _num$split2[2];

          return '' + char2 + char1 + char3;
        }).map(Number);
        var entries = [].concat(_toConsumableArray(result.map(function (num) {
          var _String$split = String(num).split(''),
              _String$split2 = _slicedToArray(_String$split, 3),
              char1 = _String$split2[0],
              char2 = _String$split2[1],
              char3 = _String$split2[2];

          return '' + char2 + char1 + char3;
        })), _toConsumableArray(output)).sort();

        var outputGridString = '';

        entries.map(function (entry, i) {
          outputGridString = '' + outputGridString + entry % 10 + ((i + 1) % 9 === 0 ? '\n' : '');
        });

        console.log(outputGridString);
      });
    }

    // returns every clause for an empty Sudoku board as a SudokuCNF data structure.

  }], [{
    key: 'createFullCNF',
    value: function createFullCNF() {
      return [].concat(_toConsumableArray(atLeastOneNumberInEachEntry), _toConsumableArray(numberAppearsAtMostOnceInEachRow), _toConsumableArray(numberAppearsAtMostOnceInEachColumn), _toConsumableArray(numberAppearsAtMostOnceInEach3x3Grid));
    }
  }]);

  return SudokuCNF;
}();

exports.default = SudokuCNF;


var sudokuCNF = new SudokuCNF();

sudokuCNF.parse();