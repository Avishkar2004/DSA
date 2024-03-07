let data = new Set(["avi", "raj", "avi"]);

//! this is used to add value in set
//  data.add("new")
// console.log(data); // Set(3) { 'avi', 'raj', 'new' }
// data.add({ email: "avis@gmail.com" });
// console.log(data) // Set(3) { 'avi', 'raj', { email: 'avis@gmail.com' } }

//! has property
// console.log(data.has("avi")); // true

//! this is used to size of the set
// console.log(data.size) //

//! this is used to clear data from the set
// data.clear()
// console.log(data) // Set(0) {}

//! this is used to delete data from the set
// data.delete("avi")

// console.log(data) // Set(1) { 'raj' }

// for(x of data) {
//     console.log(x)
// }
// avi
// raj

// data.forEach((val) => console.log(val));
// avi
// raj

//! values
// console.log(data.values()); // [Set Iterator] { 'avi', 'raj' }
//! keys
// console.log(data.keys()); // [Set Iterator] { 'avi', 'raj' }
//! Entries
// console.log(data.entries()); //[Set Entries] { [ 'avi', 'avi' ], [ 'raj', 'raj' ] }

