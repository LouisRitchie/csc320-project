function numberAppearsAtMostOnceInEach3x3Cube() {
  return [...noVerticalDuplicates(), ...noHorizontalDuplicates()]
}

function noVerticalDuplicates() {
  let result = []

  for (let z=1; z<=9; z++) {
    for (let i=0; i<=2; i++) {
      for (let j=0; j<=2; j++) {
        let temp = []

        for (let x=1; x<=3; x++) {
          for (let y=1; y<=3; y++) {
            for (let k=y+1; k<=3; k++) {
              temp.push([Number(`-${3 * i + x}${3 * j + y}${z}`), Number(`-${3 * i + x}${3 * j + k}${z}`)])
            }
          }
        }

        result.push(...temp)
      }
    }
  }

  return result
}

function noHorizontalDuplicates() {
  let result = []

  for (let z=1; z<=9; z++) {
    for (let i=0; i<=2; i++) {
      for (let j=0; j<=2; j++) {
        let temp = []

        for (let x=1; x<=3; x++) {
          for (let y=1; y<=3; y++) {
            for (let k=y+1; k<=3; k++) {
              for (let l=1; l<=3; l++) {
                temp.push([Number(`-${3 * i + x}${3 * j + y}${z}`), Number(`-${3 * i + k}${3 * j + l}${z}`)])
              }
            }
          }
        }

        result.push(...temp)
      }
    }
  }

  return result
}

console.log(JSON.stringify(numberAppearsAtMostOnceInEach3x3Cube()))
