/*
  A palindrome is a word that has symmetrical letters.
  The first letter matches the last letter and second to last letter matches the second letter and so on.
  string === string.split("").reverse().join('')
*/

import { allSubstrings as getAllSubstrings } from "./05-all-substrings";

function palindromicSubstrings(string) {
  const allSubstrings = getAllSubstrings(string);
  return allSubstrings.filter(
    (string) =>
      string.length > 1 && string === string.split("").reverse().join("")
  );
}

console.log(palindromicSubstrings("madam"));
