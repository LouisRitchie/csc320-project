let result = []

for (let x=1; x<=9; x++) {
  for (let y=1; y<=9; y++) {
    let temp = []

    for (let z=1; z<=9; z++) {
      temp.push(Number(`${x}${y}${z}`))
    }

    result.push(temp)
  }
}

console.log(JSON.stringify(result))
