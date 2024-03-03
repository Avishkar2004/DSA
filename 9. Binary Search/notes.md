2 types of Binary Search :-
Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity

Input : arr[] = {1, 3, 5, 7, 8, 9}, x = 5
Output : Element found!

Input : arr[] = {1, 3, 5, 7, 8, 9}, x = 6
Output : Element not found!

Note: Assuming the array is sorted.

These are the following ways to do Binary Search in JavaScript: 

Table of Content

Recursive Approach
Iterative Approach


1. Iterative
2. Recursive


Iterative :-

[12,34,12,42,34,56]
no of input / 2 half kar deti hai
arr ko 2 equal part mai devide kar deti hai
aur nikalti hai mid point aapka element hai suppose [42] usko midpoint se check karegi kya he midpoint aapke element se chota hai agr vo chota hai usko vo drop kr degi

- hamare pass ek midpoint hona chahiye
- ek starting point
- ek ending point

what we use in Iterative approach :-
- loop [array ko Search karta hai or ans de deta hai]


Eg:-
[3,100,20,42,5,75,12] iske upr hum sirf linear Search use karte hai
- agr aapko Binary hi use krni hai to pahle usko sort karo
- Binary hamesha sorted array ke hi uper kam karta hai

Iterative Approach:
In this iterative approach, instead of recursion, we use a while loop, and the loop runs until it hits the base condition, i.e. start becomes greater than end. 
Example: This example shows the use of the above-explained approach.

// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {
 
    let start = 0, end = arr.length - 1;
 
    // Iterate while start not meets end
    while (start <= end) {
 
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
 
        // If element is present at 
        // mid, return True
        if (arr[mid] === x) return true;
 
        // Else look in left or 
        // right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
 
    return false;
}
 
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
 
if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}
 
x = 8;
 
if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}

Output :-
Element found!
Element found!

Time Complexity: O(logN).

Auxiliary Space: O(1) 

Recursive :-


what we use in Recursive approach :-
- Recursion 

[10,12,19,33,51,68,71,100]
- ye na ek midpoint nikal lega 33 or 51
Recursive approach :-
- we make loop

- BASE CONDITION: If the starting index is greater than the ending index return false.
- Compute the middle index.
- Compare the middle element with the number x. If equal return true.
-If greater, call the same function with ending index = middle-1 and repeat step 1.
- If smaller, call the same function with starting index = middle+1 and repeat step 1. 

Example: This example shows the use of the above-explained approach.

let recursiveFunction = function (arr, x, start, end) {
 
    // Base Condition
    if (start > end) return false;
 
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
 
    // Compare mid with given key x
    if (arr[mid] === x) return true;
 
    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}
 
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
 
if (recursiveFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else { console.log("Element not found!"); }
 
x = 6;
 
if (recursiveFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else { console.log("Element not found!"); }

Output :-
Element found!
Element not found!

Time Complexity: O(logN)

Auxiliary Space: O(1) 