// * Two Pointers vs Sliding Window
// * Longest Substring without Repeating Characters

const arr = ["A", "B", "C", "D", "B", "E", "A"];

const findLongestSubStringWithoutRepeatingCharacters = (arr) => {
  if (arr.length < 1) return arr;
  const dict = {};

  let fastPtr = 0;
  let slowPtr = 0;

  let tempCurrentValue = "";

  let tempLongest = 0;
  let longestResult = 0;

  while (fastPtr < arr.length) {
    tempCurrentValue = arr[fastPtr];
    if (!dict[tempCurrentValue]) {
      dict[tempCurrentValue] = 1;
      tempLongest++;
      fastPtr++;
    } else {
      tempCurrentValue = arr[slowPtr];
      dict[tempCurrentValue] = undefined;
      tempLongest--;
      slowPtr++;
    }
    longestResult = Math.max(tempLongest, longestResult);
  }
  return longestResult;
};

console.log(findLongestSubStringWithoutRepeatingCharacters(arr));
