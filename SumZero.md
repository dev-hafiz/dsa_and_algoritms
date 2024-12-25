# Two Pointer Sum Algorithm

## Overview
This algorithm uses a two-pointer technique to find a pair of numbers in a sorted array that sum to zero. It is an efficient method with a time complexity of O(n).

---

## Initialization
- **left**: A pointer initialized to the beginning of the array (index 0).
- **right**: A pointer initialized to the end of the array (index of the last element).

---

## Iteration
1. **Condition**: The `while` loop continues as long as `left` is less than `right`.
2. **Sum Calculation**: Calculate the sum of the elements pointed to by `left` and `right`:
   ```javascript
   sum = arr[left] + arr[right];
   ```

---

## Condition Checks
- **If `sum === 0`**:
  - A pair of numbers that sum to zero is found.
  - The function returns an array containing the two numbers:
    ```javascript
    return [arr[left], arr[right]];
    ```

- **If `sum > 0`**:
  - The `right` pointer moves one position to the left to decrease the sum:
    ```javascript
    right--;
    ```

- **If `sum < 0`**:
  - The `left` pointer moves one position to the right to increase the sum:
    ```javascript
    left++;
    ```

---

## No Pair Found
If the loop completes without finding a pair that sums to zero, the function implicitly returns `undefined`.

---

## Time Complexity
The algorithm uses the two-pointer approach, which effectively iterates through the array only once. Therefore, the time complexity is:
- **O(n)**, where 'n' is the number of elements in the array.

---

## Key Idea
The algorithm leverages the fact that the array is sorted. By moving the pointers in the appropriate direction (left or right), it efficiently searches for the pair that sums to zero.

---

## Example Code
```javascript
function findPairWithZeroSum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined; // No pair found
}

// Example usage:
const result = findPairWithZeroSum([-5, -3, -1, 0, 2, 4, 6]);
console.log(result); // Output: [-4, 4]
```

---

## Advantages
- Efficient for sorted arrays.
- Simple and easy to implement.

---

## Limitations
- The array must be sorted beforehand. If not, the algorithm requires an additional sorting step, which has a time complexity of O(n log n).

---

## Applications
- Solving problems involving two numbers with a specific sum.
- Useful in scenarios where the input array is sorted or can be sorted efficiently.

