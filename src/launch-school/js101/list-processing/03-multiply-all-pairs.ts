/*
 take two arrays of integers and for each number in an array we will multiply it by each number of the other array. And return an array of the products


*/

function multiplyAllPairs(arrayA: number[], arrayB: number[]) {
  let arrayOfProducts = [];
  arrayA.forEach((numberA) => {
    arrayOfProducts = [
      ...arrayOfProducts,
      ...arrayB.map((numberB) => numberB * numberA),
    ];
  });
  return arrayOfProducts.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
