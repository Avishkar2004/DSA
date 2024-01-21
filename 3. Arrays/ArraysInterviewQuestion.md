How to create and declare array ?
2 ways :-

let arr = new Array()

let arr = []

How to add in it ?
2 ways

1. Manually
let arr = ["Apple","Hi","banana"]
//accesing in array
console.log(arr[0])



what array can store ?
-everything you can think


let person = {
  name:"avi",
  age:24
}


let arr = ["Apple","Hi","banana", person]
console.log(arr[3])

//accesign specific property
console.log(arr[3].name)
//how many element in array
console.log(arr.length)


// ADD AND REMOVE ELEMENT FROM AN ARRAY
push and pop is most commonaly used method when it comest adding or removing element at the end of the element


shift and unshift is most commonaly used method when it comest adding or removing element at the starting of the element

<!-- Push method  -->
let person = {
  name:"avi",
  age:24
}

let arr = ["Apple","Hi","banana", person]

arr.push("jyoti")
<!-- console.log(arr.length) -->
console.log(arr)  

[ 'Apple', 'Hi', 'banana', { name: 'avi', age: 24 }, 'jyoti' ]


<!-- pop method -->
let person = {
  name:"avi",
  age:24
}

let arr = ["Apple","Hi","banana", person]

arr.push("jyoti")
// console.log(arr.length)

arr.pop()
console.log(arr)  

[ 'Apple', 'Hi', 'banana', { name: 'avi', age: 24 } ]


<!-- Unshift method -->
let person = {
  name: "avi",
  age: 24,
};

let arr = ["Apple", "Hi", "banana", person];



arr.unshift("avishkar")

console.log(arr);

[ 'avishkar', 'Apple', 'Hi', 'banana', { name: 'avi', age: 24 } ]


<!-- shift method -->

let person = {
  name: "avi",
  age: 24,
};

let arr = ["Apple", "Hi", "banana", person];


arr.unshift("avishkar")
arr.shift()
console.log(arr);



[ 'Apple', 'Hi', 'banana', { name: 'avi', age: 24 } ]



Looping an array

<!-- Using for loop -->

let arr = ["Apple", "Hi", "banana"];


for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

Output :-
Apple
Hi
banana


<!-- Using while loop -->

let i = 0
while(i < arr.length) {
  console.log(arr[i])
  i++;
}

Output :-
Apple
Hi
banana


<!-- Inbuild loop method -->

const numbers =   [1,2,3,4,5]

numbers.map((data) => {
  console.log(data)
})

Output :-
1
2
3
4
5

Map :-
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.


const numbers =   [1,2,3,4,5]

const newNumber = numbers.map((item, index, arrays) => {
return item + 4
})
console.log(newNumber)

Output :- [ 5, 6, 7, 8, 9 ]



<!-- Filter -->

const numbers =   [1,2,3,4,5]

// filter takes condition inside it and return only those element satisf this condition
const newNumber = numbers.filter((item, index, arrays) => {
return item > 3
})
console.log(newNumber)

Output :-
[ 4, 5 ]

<!-- Reduce  -->

const numbers =   [1,2,3,4,5]

// accumulator :- previous value
// reduct :- takes an array and reduces by down in just one value
const newNumber = numbers.reduce((prev, item) => {
return prev + item
}, 0)
console.log(newNumber)

Output :-
15

<!-- Some in arrays -->

const numbers =   [1,2,3,4,5]

// Sum :- if satisfies the condition then return every single item 
// return true of false
const newNumber = numbers.some((item, index,array) => {
return item > 3
})
console.log(newNumber)

output :-
true    


<!-- Every in js -->

const numbers =   [1,2,3,4,5]

// every check for every single element in array if the condition satisfies then return every single element
const newNumber = numbers.every((item, index,array) => {
return item > 0
})
console.log(newNumber)

Output :-
true

<!-- Find Method -->

const numbers =   [1,2,3,4,5]

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const newNumber = numbers.find((item, index,array) => {
return item > 3
})
console.log(newNumber)

Output :-
4

<!-- Find Index -->
const index = numbers.findIndex((item) => item === 2)
console.log(index)
Output :-
2


<!-- Speard and rest operator -->

const nums = [1,2,3]
const nums2 = [4,5,6,7]
const ans =  [...nums, ...nums2]

console.log(ans)

output :-
[
  1, 2, 3, 4,
  5, 6, 7
]


<!-- rest operator -->

const nums = [1,2,3]
const nums2 = [4,5,6,7]
<!-- this is the rest operator -->
function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2))

output :-
[ 1, 2, 3, [ 4, 5, 6, 7 ] ]

<!-- slice :- access certain array-->
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.


let data = ["Hi","no", "Yes"]

data.slice()
console.log(data) //[ 'Hi' ]

<!-- Splice -->

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.

let data = ["Hi","no", "Yes"]

const ans  = data.splice(1,2,"jyoti")
console.log(ans) //[ 'no', 'Yes' ]


<!-- Fill Function -->
Changes all array elements from start to end index to a static value and returns the modified array

@param value — value to fill array section with

@param start
index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

@param end
index to stop filling the array at. If end is negative, it is treated as length+end.


let data = [1,3,8,4,3]
data.fill(1) //1,1,1,1,1
data.fill(2,2) //2,2,8,4,3
console.log(data)

<!-- flat -->
const numbers = [1,[2,3],[[4,5], 6]]
const flattenArray = flatEx.flat(2) //we can pass depth

console.log(flattenArray) //[ 1, 2, 3, 4, 5, 6 ]

<!-- reverse -->

let data = [1,3,8,4,3]
data.reverse()
conosole.log(data) //[ 3, 4, 8, 3, 1 ]


<!-- Sort -->

const unsoreted = [5,32,55,23,1,0]
unsoreted.sort((a,b) => a - b ) //[ 0, 1, 5, 23, 32, 55 ]
unsoreted.sort((a,b) => b - a ) //[ 55, 32, 23, 5, 1, 0 ]
console.log(unsoreted)


<!-- Interview Question -->

Q1.second largest number
given an array of size N, print second largest
distinct element from an array

input = [12,35,,1,10,34, 1] ---> Output :- 34
input = [10,5,10] ---> output:5

1 Approach
function secondLargest(arr) {
  const uniqeArr = Array.from(new Set(arr)); //Creates an array from an iterable object.
  uniqeArr.sort((a, b) => {
    return b - a;
  });
  if (uniqeArr.length >= 2) {
    return uniqeArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([10,5,10]))


2 Approach

// input = [12,35,,1,10,34, 1] => 34
// input = [10,5,10]  => 5

[12, 35 , 1, 10, 34, 1];

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
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


<!-- Rotate array by k -->
given the interger array nums , rotate the array to the right by k steps when k is non-negative

nums=[1,2,3,4,5,6,7] k = 3  ==>[5,6,7,1,2,3,4]
nums=[-1,-100,3,99] k = 2 ==>[3,99.-1,-100]

[1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

function rotateArray (nums, k) {
    let size = nums.length;
    if(size > k) {
      k = k % size
    }
    const rotated = nums.splice(size - k, size) //8 - 5  =3
    nums.unshift(...rotated)
    return nums
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))

Output :-
[
  5, 6, 7, 1,
  2, 3, 4
]

Time comp :- O(n)







function rotateArrayOptimize(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);  // O(n)
  reverse(nums, 0, k - 1);            //O(k)
  reverse(nums, k, nums.length - 1);  //O(n - k)
  return nums;
  //can reverse this
  // [1,2,3,4,5,6,7] => [7,6,5,1,2,3,4] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]
}

Time comp = O(n)
Space comp = O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}


console.log(rotateArrayOptimize([-1,-100,3,99], 2))




// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    //O(n) time comp
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); //O(1) time comp
      i--;
    }
  }
  return nums.length;
}

// Time comp = O(n)
// space comp = O(1)

console.log(removeDuplicates([1,1,2])); //2

// Without js method

function removeDuplicatesNew(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //5
console.log(removeDuplicates([1,1,2] )) //2