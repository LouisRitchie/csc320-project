function numberAppearsAtMostOnceInEachRow() {
  let result = []

  for (let x=1; x<=9; x++) {
    for (let z=1; z<=9; z++) {
      let temp = []

      for (let y=1; y<=8; y++) {
        for (let i=y+1; i<=9; i++) {
          temp.push([Number(`-${x}${y}${z}`), Number(`-${x}${i}${z}`)])
        }
      }

      result.push(...temp)
    }
  }

  return result
}


console.log(JSON.stringify(numberAppearsAtMostOnceInEachRow()))
