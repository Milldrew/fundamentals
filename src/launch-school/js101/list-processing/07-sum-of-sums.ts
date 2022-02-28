// write a function that takes an array and returns the sum of the sums of each leading subsequenc in that array
// [3,5,2] // 3 + 3 + 5 + 3 + 5 + 2 => 21
//

function sumOfSums(arrayOfNumbers: number[]) {
  let leadingSubsequences = [];
  let length = arrayOfNumbers.length;

  for (let end = 1; end <= length; end += 1) {
    leadingSubsequences = [
      ...leadingSubsequences,
      ...arrayOfNumbers.slice(0, end),
    ];
  }
  return leadingSubsequences.reduce((sum, current) => sum + current);
}

console.log(sumOfSums([3, 5, 2]));
