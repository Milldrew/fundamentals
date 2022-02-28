/*
Take a string and return all of the substrings that include the first letter

abcd
----
abcd
abc
ab
a
*/
export function leadingSubstrings(string: string) {
  const length = string.length;
  let leadingSubstrings = [];
  for (let end = 1; end <= length; end += 1) {
    leadingSubstrings.push(string.substring(0, end));
  }
  return leadingSubstrings;
}

console.log(leadingSubstrings("hello"));
