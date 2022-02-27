/** Write a function that takes one argument, a postiive integer. and returns
 * the sum of the digits
 *
 */

function sum(number): number {
  return String(number)
    .split("")
    .reduce((previousValue, currentValue) => previousValue + +currentValue, 0);
}

console.log(sum(10));
