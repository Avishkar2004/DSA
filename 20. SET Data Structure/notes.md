advantage :- it is same as array but it removes duplicate values 

let data = new Set(["avi","raj","avi"])

console.log(data) //Set(2) { 'avi', 'raj' }


Notes :- 
The Set object lets you store unique values of any type, whether primitive values or object references.

Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

