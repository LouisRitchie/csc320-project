// need to read in from stdin a sudoku puzzle
// should specify the format of sudoke puzzle with cline arg
// need to produce the ~8000 predicate disjunctions
// need to remove the unit predicates according to input puzzle
// need to output our data structure into CNF
// if input puzzle is empty, produce the ~8000 predicate disjunction in CNF

const atLeastOneNumberInEachEntry = require('./atLeastOneNumberInEachEntry.json')
const numberAppearsAtMostOnceInEachRow = require('./numberAppearsAtMostOnceInEachRow.json')
const numberAppearsAtMostOnceInEachColumn = require('./numberAppearsAtMostOnceInEachColumn.json')
const numberAppearsAtMostOnceInEach3x3Grid = require('./numberAppearsAtMostOnceInEach3x3Grid.json')


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
export default class SudokuCNF {
  // accepts our SudokuCNF structure to instantiate the class
  constructor(cnf) {
    if (!cnf) {
      this.cnf = SudokuCNF.createFullCNF()
    } else {
      this.cnf = cnf
    }
  }


  /* sets to true the propositional variable at index. Every clause containing that propositional
   * variable has two outcomes: Remove that variable if it's negated & remove that clause if not.
   */
  setTrue = index => {
  }

  toString = () => {
    console.log(JSON.stringify(this.cnf))
  }


  static parse(string) {
    return []
  }

  // returns every clause for an empty Sudoku board as a SudokuCNF data structure.
  static createFullCNF() {
    return [
      ...atLeastOneNumberInEachEntry,
      ...numberAppearsAtMostOnceInEachRow,
      ...numberAppearsAtMostOnceInEachColumn,
      ...numberAppearsAtMostOnceInEach3x3Grid
    ]
  }
}

const myCNF = new SudokuCNF()
SudokuCNF.createFullCNF()
myCNF.toString()
console.log(SudokuCNF.atLeastOneNumberInEachEntry())
