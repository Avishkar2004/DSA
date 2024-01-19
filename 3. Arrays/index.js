const numbers =   [1,2,3,4,5]

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const newNumber = numbers.find((item, index,array) => {
return item > 3
})
console.log(newNumber)