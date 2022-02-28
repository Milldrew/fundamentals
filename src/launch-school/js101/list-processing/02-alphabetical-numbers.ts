/**
 * Write a function that takes an array of integers between 0 and 19 and returns narray
function alphabeticalNumber(arrayOfIntegers):SortedArray { * of htose intergers sorted based on the english word for each number
 */
const NUMBER_NAMES = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphabeticalNumbers(arrayOfIntegers: number[]) {
  const names = arrayOfIntegers.map((integer) => NUMBER_NAMES[integer]);
  names.sort();
  console.log(names);
  return names.map((name) =>
    NUMBER_NAMES.findIndex((sortedName) => sortedName === name)
  );
}

console.log(
  alphabeticalNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
