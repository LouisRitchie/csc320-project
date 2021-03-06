const Readline = require('readline')
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
 */
export default class SudokuCNF {
  // accepts our SudokuCNF structure to instantiate the class
  constructor(cnf) {
    this.cnf = SudokuCNF.createFullCNF()
    this.variableCount = 729
  }


  /* sets to true the propositional variable at index. Every clause containing that propositional
   * variable has two outcomes: Remove that variable if it's negated & remove that clause if not.
   */
  setTrue = index => {
    const negativeIndex = -index
    for (let i=0; i<this.cnf.length; i++) {
      if (this.cnf[i].includes(negativeIndex)) {
        if (this.cnf[i].length === 1) {
          this.cnf.splice(i, 1)
          i--
          continue
        } else {
          this.cnf[i].splice(this.cnf[i].indexOf(negativeIndex), 1)
        }
      }

      if (this.cnf[i].includes(index)) {
        this.cnf.splice(i, 1)
        i--
      }
    }
  }

  toString = () => {
    const clauseCount = this.cnf.length
    let result = `p cnf ${this.variableCount} ${this.cnf.length}\n`

    for (let i=0; i<clauseCount; i++) {
      result = `${result}${this.cnf[i].reduce((acc, curr) => `${curr} ${acc}`, '0\n')}`
    }

    return result
  }


  parse(string) {
    let result = []
    let content = ''

    const rl = Readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })

    rl.on('line', line => {
      if (content === '') {
        content = line
      } else {
        content = `${content}\n${line}`
      }
    })

    rl.on('close', () => {
      let [grid, output] = content.split('*')

      grid.split('\n').map((line, i) => (
        line.split('').map((digit, j) => {
          if (digit !== '0') {
            result.push(Number(`${j+1}${i+1}${digit}`))
          }
        })
      ))

      output = output.split(' ')
        .filter(num => Number(num) > 0)
        .map(num => {
          const [char1, char2, char3] = num.split('')
          return `${char2}${char1}${char3}`
        })
        .map(Number)

      const entries = [
        ...result.map(num => {
          const [char1, char2, char3] = String(num).split('')
          return `${char2}${char1}${char3}`
        }),
        ...output
      ].sort()

      let outputGridString = ''

      entries.map((entry, i) => {
        outputGridString = `${outputGridString}${entry % 10}${(i + 1) % 9 === 0 ? '\n' : ''}`
      })

      console.log(outputGridString)
    })
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

const sudokuCNF = new SudokuCNF()

sudokuCNF.parse()


