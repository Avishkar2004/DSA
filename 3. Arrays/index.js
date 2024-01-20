// input = [12,35,,1,10,34, 1]
// input = [10,5,10]

[12, 35 , 1, 10, 34, 1];

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) { //O(n)
    if (arr[i] > largest) {
        secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] != largest && arr[i] > secondLargest){
        secondLargest= arr[i]
    }
  }
  return secondLargest
}


console.log(secondLargest([12, 35 , 1, 10, 34, 1]));

// Time COmplexity :- O(n);
// Space Complexity :- O(1);