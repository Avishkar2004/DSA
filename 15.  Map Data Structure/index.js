let data = new Map([
  ["name", "test"],
  [true, "bool key"],
  [100, "number"],
]);

//! How to add value in it
// data.set("age", 19);
//! How to check size
// console.log(data.size)  // 4

//! ye key hai ya nhi hai map mai
// console.log(data.has(100)) // true

//! how to get value in it
// console.log(data.get(100)) // true

//! how to clear data
// data.clear() //this will delete our value from map


//! how can i apply loop 
// ab idr 2 loop lag sakte hai for of loop or for each loop

for(x of data) {
    // console.log(x) // [ 'name', 'test' ] ,[ true, 'bool key' ],[ 100, 'number' ]
    //! this will return keys
    // console.log(x[0])  // name, true,100
    //! this will return values
    // console.log(x[1]) // test, boolkey,number
    
}

// console.log(data);

//! For Each Value
data.forEach((val, key) =>{
    // console.log(val) // test, boolkey,number
    // console.log(key) // name,true,100
})


//! This is how you can get single value
console.log(data.get("name")) //test
// console.log(name)