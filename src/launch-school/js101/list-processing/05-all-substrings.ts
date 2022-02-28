import { leadingSubstrings } from "./04-leading-substrings";

function trailingSubstrings(string: string) {
  const length = string.length;
  let trailingSubstrings = [];
  for (let start = 0; start < length; start += 1) {
    trailingSubstrings.push(string.substring(start, length));
  }
  return trailingSubstrings;
}

console.log(trailingSubstrings("hello"));

export function allSubstrings(string) {
  let allSubstrings = [];
  const allLeadingSubstrings = leadingSubstrings(string);
   allLeadingSubstrings
    .forEach((string) => allSubstrings = [...allSubstrings, ...trailingSubstrings(string)]))
    return allSubstrings
}

console.log(allSubstrings("abcdef"));
