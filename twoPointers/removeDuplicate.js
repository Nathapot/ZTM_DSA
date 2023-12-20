// * Remove Duplicate in an Array (sorted array)
const array = [0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7];

const removeDuplicate = (array) => {
  const lengthOfArray = array.length;
  if (lengthOfArray < 1) return array;
  let fastPtr = 0;
  let slowPtr = 0;

  while (fastPtr < lengthOfArray) {
    if (array[fastPtr] !== array[slowPtr]) {
      slowPtr++;
      array[slowPtr] = array[fastPtr];
    } else {
      fastPtr++;
    }
  }
  return array.slice(0, slowPtr + 1);
};

console.log(removeDuplicate(array));
