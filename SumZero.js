//! SUM Zero Problem [ Output --> num1 + num2 === 0]
//* Time complexity O(n) Linear
//* [-5, -4, -3, -2, 0, 2, 3, 4, 6, 8]

function SumZeroProblem(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const Output = SumZeroProblem([-5, -4, -3, -2, 0, 2, 3, 4, 6, 8]);
console.log("Output --> ", Output);
