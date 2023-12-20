// * Two Sum (sorted array)
const arr = [2, 3, 4, 5, 8, 11, 18];
const target = 8;

const twoSum = (arr, target) => {
  if (arr.length <= 2) {
    return arr;
  }
  let startPtr = 0;
  let endPtr = arr.length - 1;

  let tempSum = -1;

  while (startPtr < endPtr) {
    tempSum = arr[startPtr] + arr[endPtr];

    if (tempSum === target) return [startPtr, endPtr];
    else if (tempSum > target) endPtr--;
    else startPtr++;
  }
  return -1;
};

console.log(twoSum(arr, target));
