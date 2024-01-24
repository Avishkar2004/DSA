function Piyush() {
  return Rehana();
}

function Rehana() {
  return Vadant();
}

function Vadant() {
  return Chirag();
}

function Chirag() {
  return Ajay();
}

// base case
function Ajay() {
  return true;
}

// console.log(Piyush());

function gotoLunch(person) {
  if (person === 5) return true;
  console.log(person)
  return gotoLunch(person + 1);
}

console.log("outcome: ",gotoLunch(1))

1
2
3
4
outcome:  true


why do we need recursion :-
tree, graph reversal, sorting, wide and conqurer, backtracking, dynamic programming.


Loops vs recursion:-

Loop :-
// Loop vs recursion:-

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1,2,3,4]))

Output :-
24


Function :-
function multiply(arr) {
//  console.log(arr)
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1, 2, 3, 4]));

//24


//Most asked Recursion Question for DSA Interviews

Q1. Factorial of n:-

// Factorial of n
//5*4*3*2*1

function Factorial(n) {
  if(n === 0) {
    return 1
  } else 
  return n*Factorial(n - 1)
}
console.log(Factorial(5))


Q2.:- Create an array with range of numbers
Input:- start = 1, end = 5 ==> output :-



function RangeOfNumbers(startNum, endNum) {
  //console.log(endNum);
  if (endNum < startNum) {
    return [];
  } else {
    const numberss = RangeOfNumbers(startNum, endNum - 1);
    numberss.push(endNum);
    return numberss;
  }
}

console.log(RangeOfNumbers(0, 5));
[ 0, 1, 2, 3, 4, 5 ]


Q3. Palindrome number
an interger is a palindrome when it reads the same forward and backend

input :- x = 121 ===> true
input :- x = 10  ===> false

function palindrome(n) {
  let s = n.toString();
  if (s.length <= 1) return true;
  if (s[0] === s[s.length - 1]) {
    return palindrome(s.slice(1, -1));
  } else {
    return false;
  }
}

console.log(palindrome(101)) //true
console.log(palindrome(10))  //false


Q4.
// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2


//! Using for loop

var fib = function(n) {
  let arr = [0, 1]
  for(let i = 2; i <=n; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}


console.log(fib(5))
//5



//! Using recursion

function fibRecursion(n) {
  if(n <= 1) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2)
}

console.log(fibRecursion(3)) //3
console.log(fibRecursion(15)) //610



Q5. Reverse a String
//Input :- "hello" ==> output :- "olleh"

function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Hello"))

Output :-
olleH

2.
const str = ["Hello"];
const res = str.join("").split("").reverse();
console.log(res);

// [ 'o', 'l', 'l', 'e', 'H' ]


Q6.
Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Input: [0]      ----->>>>>  Output: [[],[0]]


function subset(nums) {
  let result = [];
  let temp = [];

  function recursiveSubset(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }

  recursiveSubset(nums, 0);
  return result;
}

console.log(subset([1, 2, 3]));



Output:-
[
  [ 1, 2, 3 ], [ 1, 2 ],
  [ 1, 3 ],    [ 1 ],
  [ 2, 3 ],    [ 2 ],
  [ 3 ],       []
]