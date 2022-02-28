// Write [['apple', 3]] => ['apple', 'apple', 'apple']
//
type order = [string, number];
function buyFruit(fruitNameAndCount: order[]): string[] {
  let fruitNamesOnly: [] | string[] = [];
  fruitNameAndCount.forEach((order: order) => {
    for (let count = 1; count <= order[1]; count += 1) {
      fruitNamesOnly.push(order[0])
    }

  }))
  return fruitNamesOnly
}

console.log(buyFruit([ ["apple", 3], ['orange', 2] ]))
