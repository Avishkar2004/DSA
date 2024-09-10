let data = [5, 9, 13, 17];
let find = 17;

let start = 0;
let end = data.length - 1;

let position = undefined;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(position);

===================


/**
 * NAME
 *     binarySearch - perform binary search on a sorted array
 *
 * SYNOPSIS
 *     binarySearch(arr, target)
 *
 * DESCRIPTION
 *     The binarySearch() function performs a binary search on a sorted 
 *     array `arr`, looking for the value `target`. The array must be 
 *     sorted in ascending order for the binary search to work correctly.
 *
 * PARAMETERS
 *     arr     - An array of numbers, sorted in ascending order.
 *     target  - The number to search for within the array.
 *
 * RETURN VALUE
 *     The binarySearch() function returns the index of the target value 
 *     in the array if it is present. If the target is not found, it 
 *     returns -1.
 *
 * EXAMPLES
 *     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *     const target = 5;
 *     const result = binarySearch(arr, target);
 *     // result will be 4 (0-based index)
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;  // target is not present in the array
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(arr, target);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found");
}
