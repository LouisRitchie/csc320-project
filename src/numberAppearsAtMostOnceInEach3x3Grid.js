function numberAppearsAtMostOnceInEach3x3Cube() {
  return [...noVerticalDuplicates(), ...noHorizontalDuplicates()]
}

function noVerticalDuplicates() {
  let result = []

  const z=5
  const i=0
  const j=0

        let temp = []

        for (let x=1; x<=3; x++) {
          for (let y=1; y<=3; y++) {
            for (let k=y+1; k<=3; k++) {
              temp.push([Number(`-${3 * i + x}${3 * j + y}${z}`), Number(`-${3 * i + x}${3 * j + k}${z}`)])
            }
          }
        }

        result.push(...temp)

  return result
}

function noHorizontalDuplicates() {
  let result = []

  const z=5
  const i=0
  const j=0

        let temp = []

        for (let x=1; x<=3; x++) {
          for (let y=1; y<=3; y++) {
            for (let k=x+1; k<=3; k++) {
              for (let l=1; l<=3; l++) {
                temp.push([Number(`-${3 * i + x}${3 * j + y}${z}`), Number(`-${3 * i + k}${3 * j + l}${z}`)])
              }
            }
          }
        }

        result.push(...temp)

  return result
}

console.log(JSON.stringify(noVerticalDuplicates()))
console.log('********************************************************************************')
console.log(JSON.stringify(noHorizontalDuplicates()))
