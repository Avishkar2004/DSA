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

<!-- Speard and rest operator -->