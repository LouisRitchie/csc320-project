function numberAppearsAtMostOnceInEachRow() {
  let result = []

  for (let y=1; y<=9; y++) {
    for (let z=1; z<=9; z++) {
      let temp = []

      for (let x=1; x<=8; x++) {
        for (let i=x+1; i<=9; i++) {
          temp.push([Number(`-${x}${y}${z}`), Number(`-${i}${y}${z}`)])
        }
      }

      result.push(...temp)
    }
  }

  return result
}


console.log(JSON.stringify(numberAppearsAtMostOnceInEachRow()))
