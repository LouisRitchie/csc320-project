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
export default class SudokuCNF {
  // accepts our SudokuCNF structure to instantiate the class
  constructor() {
    this.cnf = cnf
  }


  // INSTANCE METHODS

  /* sets to true the propositional variable at index. Every clause containing that propositional
   * variable has two outcomes: Remove that variable if it's negated & remove that clause if not.
   */
  setTrue = index => {
  }

  toString = () => {
    console.log(JSON.stringify(this.cnf))
  }


  // STATIC METHODS

  parse(string) {
    return []
  }

  // returns the full SudokuCNF data structure.
  createFullCNF() {

  }
}
