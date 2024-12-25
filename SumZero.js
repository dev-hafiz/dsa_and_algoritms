//! SUM Zero Problem [ Output --> num1 + num2 === 0]
//* Time complexity O(n^2) Quadratic

function getSumPairZero(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number - arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 3, 4, 6, 8]);
console.log(result);
